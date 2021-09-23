sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "../model/formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/ui/core/UIComponent"

    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, formatter, Filter, FilterOperator, UIComponent) {
        "use strict";

        return Controller.extend("ccss.sap.projectccss.controller.Main", {

            formatter: formatter,

            onInit: function () {
                console.log("Se inicia aplicativo desde BAS");
            },

            onPress: function (oEvent) {
                MessageToast.show("Searching...");

                var sCity = this.byId("city").getValue();
                var sGenre = this.byId("genre").getSelectedItem().getKey();
                var oCalendar = this.byId("calendar");
                var oRowBinding = oCalendar.getBinding("rows");

                var oFilterGenre;
                var oFilterCity;

                console.log(oRowBinding);

                // Creamos filtro de gnere y city dependiendo de los inputs
                oFilterGenre = sGenre ? new Filter("genre", FilterOperator.EQ, sGenre) : null;
                oFilterCity = sCity ? new Filter("info", FilterOperator.Contains, sCity) : null;

                // Aplicar los filtros de "Genre" a las filas del calendario 
                oRowBinding.filter(oFilterGenre);

                // Aplicar los filtros de "City" a las filas del calendario 
                var aRows = oCalendar.getAggregation("rows");
                console.log(aRows);
                aRows.forEach(function (oItem) {
                    var oAppointmentsBinding = oItem.getBinding("appointments");
                    oAppointmentsBinding.filter(oFilterCity);
                });

            },

            onAppointmentSelect: function (oAppointment) {
                var oContext = oAppointment.getBindingContext("movies"),
                    sPath = oContext.getPath();

                var aParameters = sPath.split("/");
                UIComponent.getRouterFor(this).navTo("Detail", {
                    movieId: aParameters[2],
                    appointmentId: aParameters[4]
                });
            }

        });
    });