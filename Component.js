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
            model.loadData("http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=***REMOVED***&q=Regina&mode=json&units=metric&cnt=14", "", false);

            var listData = model.getProperty("/list"); 

            var updatedList = [];
            
            for(var i = 0; i < listData.length; i++) {
               // alert(listData[i].dt);
               var listItem = listData[i];
               //dt is in seconds so it is converted into milliseconds for the date conversion
                listItem.day = getDay(listItem.dt*1000);
                listItem.date = getFullDate(listItem.dt*1000);
                listItem.icon = getIcon(listItem.weather[0].id);
                listItem.image = getImage(listItem.weather[0].id);
                listItem.temp.max = getFormattedTemperature(listItem.temp.max);
                listItem.temp.min = getFormattedTemperature(listItem.temp.min);
                listItem.fullwind = getFormattedWind(listItem.speed, listItem.deg);
                listItem.pressure = getFormattedPressure(listItem.pressure);
                listItem.humidity = getFormattedHumidity(listItem.humidity);
                updatedList.push(listItem);
            }

            // set the model to the App; it will be propagated to the children
            this.setModel(model);
            
            // create the views based on the url/hash
			this.getRouter().initialize();

	}
   });
});