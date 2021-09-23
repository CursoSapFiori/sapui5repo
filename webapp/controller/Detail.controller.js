sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/UIComponent"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, UIComponent) {
        "use strict";

        return Controller.extend("ccss.sap.projectccss.controller.Detail", {

            onInit: function () {
                UIComponent.getRouterFor(this).getRoute("Detail").attachPatternMatched(this._onDetailMatched, this);
            },

            _onDetailMatched: function (oEvent) {
                var oView = this.getView(),
                    sMovieIndex = oEvent.getParameter("arguments")["movieId"],
                    sAppointmentIndex = oEvent.getParameter("arguments")["appointmentId"];

                oView.bindElement({
                    path: "/movies/" + sMovieIndex + "/appointments/" + sAppointmentIndex,
                    model: "movies",
                    events: {
                        change: this._onBindingChange.bind(this)
                    }
                });
            },

            _onBindingChange: function () {
                var oView = this.getView(),
                    oElementBinding = oView.getElementBinding("movies"),
                    sPath = oElementBinding.getPath();

                // if the path to the data does not exist we navigate to the not found page
                /*
			if (!oView.getModel("movies").getObject(sPath)) {
				UIComponent.getRouterFor(this).getTargets().display("NotFound");
            }
            */
            },

            onNavBack: function () {
                UIComponent.getRouterFor(this).navTo("Home");
            }

        });
    });