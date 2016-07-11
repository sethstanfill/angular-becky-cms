"use strict";

// template directive
export function adminNav () {
	return {
		template: require("./admin-nav.html"),
		controller: "adminNavController"
	}
};

// template controller
adminNavController.$inject = ["$scope"]
export function adminNavController($scope) {

	$scope.title = "Becky";

};