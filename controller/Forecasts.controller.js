sap.ui.define([
		'sap/ui/core/mvc/Controller'
	], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.sunshine.wt.controller.Forecasts", {
		onInit : function (evt) {
		},
        
        onPress : function (evt) {   
            var chosenForecast = evt.getSource();
			var routeToDetails = sap.ui.core.UIComponent.getRouterFor(this);
            
            var context = {
                forecast : evt.getSource().getBindingContext().getPath().substr(6)
            };

			routeToDetails.navTo("details", context);        
        }
	});
}); 