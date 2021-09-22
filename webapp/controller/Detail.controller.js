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
                var oView = this.getView();
                sMoviewIndex = oEvent.getParameter("arguments")["movieId"],
                    sAppointmentIndex = oEvent.getParameter("arguments")["appointmentId"];

                console.log(oView, sMoviewIndex, sAppointmentIndex)

                // Binding de nuestros elementos a la vista

                oView.bindElement({
                    path: "/movies/" + sMoviewIndex + "/appointments/" + sAppointmentIndex,
                    model: "movies",
                    events: {
                        change: this._onDetailMatched.bind(this)
                    }
                })
            },

            _onBindingChange: function () {
                var oView = this.getView(),
                    oElementBinding = oView.getElementBinding("movies"),
                    sPath = oElementBinding.getPath();
            },

            onNavBack: function () {
                UIComponent.getRouterFor(this).navTo("Home");
            }

        });
    });