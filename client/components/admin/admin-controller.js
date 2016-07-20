"use strict";

adminController.$inject = ["$scope", "$state", "contentService"];

export function adminController($scope, $state, contentService) {

	// admin display nav
	$scope.siteName = "Becky CMS Admin Portal";
	
	// define your pages here
	$scope.pages = {
		home: "Home",
		gallery: "Gallery",
		about: "About Us"
	};

	// get the nested state name for initial content retrieval
	var page = $state.current.name.split(".")[1];

	// get the page content from the db
	$scope.getContent = function(page) {

		contentService.get(page).then(function(response) {
			$scope.content = response;
		});

	};
	$scope.getContent(page);

	// edit content based on id
	$scope.editContent = function(item) {
		contentService.edit(item);
	};

};

// template directive for admin nav
export function adminNav () {
	return {
		template: require("./admin-nav.pug")
	}
};

// template directive for admin panel
export function adminPanel () {
	return {
		template: require("./admin-panel.pug")
	}
};