sap.ui.define([
		'sap/ui/core/mvc/Controller'
	], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.sunshine.wt.controller.Forecasts", {
		onInit : function (evt) {
		},
        
        onPress : function (evt) {
            var oBindingContext = evt.getSource().getBindingContext(); 
            detailsPage.setBindingContext(oBindingContext); // make sure the detail page has the correct data context
			app.to("detailsPage");
        }
	});
}); 