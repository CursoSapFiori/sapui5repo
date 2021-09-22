sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "../model/formatter"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, formatter) {
		"use strict";

		return Controller.extend("ccss.sap.projectccss.controller.Main", {

            formatter: formatter,

			onInit: function () {

            },
            
            onPress: function (oEvent) {
                MessageToast.show("Searching...");
            }
		});
	});
