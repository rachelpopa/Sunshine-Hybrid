sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel",
	"sap/ui/model/odata/v2/ODataModel"
], function (UIComponent, JSONModel, ResourceModel, ODataModel) {
   "use strict";
   return UIComponent.extend("sap.ui.sunshine.wt.Component", {
       	metadata : {
			manifest: "json"
		},
        
        init : function () {
          
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
              
            var oConfig = this.getMetadata().getConfig();
            var oWeatherDBModel = new JSONModel(oConfig.openWeatherDB);


            // set the model to the App; it will be propagated to the children
            this.setModel(oWeatherDBModel);
            
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