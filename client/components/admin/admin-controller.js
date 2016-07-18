"use strict";

// admin controller
adminController.$inject = ["$scope", "$state", "Content"];
export function adminController($scope, $state, Content) {

	// admin display nav
	$scope.siteName = "Becky CMS Admin Portal";
	
	// define your pages here - make sure your name
	$scope.pages = { 
		home: "Home",
		gallery: "Gallery",
		about: "About Us"
	};

	// get the nested state name for initial content retrieval
	var page = $state.current.name.split(".")[1];

	// get the page content from the db
	$scope.getContent = function(page) {

		// get current page content
		Content.find({
			filter: {
				where: {
					page: page
				}
			}
		}, function(data) {
			$scope.content = data[0];
		});

	};
	$scope.getContent(page);

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