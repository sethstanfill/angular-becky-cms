"use strict";

// template directive
export function adminPanel () {
	return {
		template: require("./admin-panel.pug"),
		controller: "adminPanelController"
	}
};

// template controller
adminPanelController.$inject = ["$scope", "$state"];
export function adminPanelController($scope, $state) {

	$scope.pages = { 
		home: "Home", 
		gallery: "Gallery", 
		about: "About Us"
	};

};