sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast"
   
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("ccss.sap.projectccss.controller.Main", {

            onInit: function () {
                console.log("Se inicia aplicativo desde BAS");
            }
     
        });
    });