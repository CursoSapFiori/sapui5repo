/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ccsssap./projectccss/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
