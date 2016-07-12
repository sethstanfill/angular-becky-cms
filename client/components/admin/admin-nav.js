"use strict";

// template directive
export function adminNav () {
	return {
		template: require("./admin-nav.pug"),
		controller: "adminNavController"
	}
};

// template controller
adminNavController.$inject = ["$scope"]
export function adminNavController($scope) {

	$scope.siteName = "Becky CMS Admin Portal";

};