sap.ui.define([
		"sap/ui/core/mvc/Controller",
        "sap/ui/sunshine/wt/model/formatter"
	], function(Controller, formatter) {
	"use strict";

	return Controller.extend("sap.ui.sunshine.wt.controller.Forecasts", {
        formatter : formatter,
        
		onInit : function (evt) {
		},
        
        onPress : function (evt) {   
            var chosenForecast = evt.getSource();
			var routeToDetails = sap.ui.core.UIComponent.getRouterFor(this);
            
            var context = {
                forecast : evt.getSource().getBindingContext().getPath().substr(6)
            };

			routeToDetails.navTo("details", context);        
        },

        onOpenMenu : function (evt) {
            var oButton = evt.getSource();

            var settingsMenu;
			// create menu only once
			if (!settingsMenu) {
				settingsMenu = sap.ui.xmlfragment(
					"sap.ui.sunshine.wt.fragment.SettingsMenu",
					this
				);
				this.getView().addDependent(settingsMenu);
			}

			var eDock = sap.ui.core.Popup.Dock;
			settingsMenu.open(false, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
        }
	});
}); 