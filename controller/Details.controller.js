sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
    "use strict";
    return Controller.extend("sap.ui.sunshine.wt.controller.Details", {
        onInit : function () {

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