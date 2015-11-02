sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("sap.ui.sunshine.wt.Component", {
       	metadata : {
			manifest: "json"
		},
        
        init : function () {
          
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
              
            // create a Model with this data
            var model = new sap.ui.model.json.JSONModel();
            //model.setData(data);
            model.loadData("http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=KEY-REMOVED&q=Regina&mode=json&units=metric&cnt=14", "", false);

            // set the model to the App; it will be propagated to the children
            this.setModel(model);
            
            // set i18n model
             var i18nModel = new ResourceModel({
                bundleName : "sap.ui.sunshine.wt.i18n.i18n"
             });
             this.setModel(i18nModel, "i18n");
            
            // create the views based on the url/hash
			this.getRouter().initialize();

	}
   });
});