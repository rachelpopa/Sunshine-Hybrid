sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, History, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.sunshine.wt.controller.Details", {
        onInit : function () {
            // set i18n model on view
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.sunshine.wt.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");        

            var routeToDetails = sap.ui.core.UIComponent.getRouterFor(this);
            //can also use directly this.oRouter.attachRouteMatched(...)
            routeToDetails.attachRouteMatched(function (evt) {
                if (evt.getParameter("name") === "details") {
                    var forecastPath = evt.getParameter("arguments").forecast;
                    
                    this.getView().bindElement({
                        path: "/list/" + evt.getParameter("arguments").forecast
                    });
                }
            }, this);
        },

        onNavPress : function () {
            var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var routeToForecasts = sap.ui.core.UIComponent.getRouterFor(this);
				routeToForecasts.navTo("forecasts");
			}
        }
   });
});