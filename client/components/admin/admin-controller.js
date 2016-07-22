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

	// used to reset creation form data after saving
	$scope.resetFormData = function() {

		// define creation object for create page to use separate ng-models
		$scope.contentForm = { 
			type: "text"
		};

	};

	// set scope by default
	$scope.resetFormData();

	// get the nested state name for initial content retrieval
	var page = $state.current.name.split(".")[1];

	// get the page content from the db
	$scope.getContent = function(page) {

		if (page == "delete") {

			// get all of the content from db
			contentService.getAll().then(function(response) {
				$scope.content = response;
			});

		} else {

			// get content based on page name
			contentService.get(page).then(function(response) {
				$scope.content = response;
			});

		}

	};
	$scope.getContent(page);

	// edit content based on id
	$scope.editContent = function(item) {
		contentService.edit(item);
	};

	// create new page content
	$scope.createContent = function() {
		contentService.create($scope.contentForm);
		$scope.resetFormData();
	};

	$scope.deleteContent = function(answer) {

		if (answer == "yes") {

			contentService.delete($scope.deleteModal.id).then(function(response) {

				// if deletion was successful
				if (!!response.count) {
					$scope.getContent(page);
				}

				$scope.deleteModal.show = false;

			});
			

		} else {
			$scope.deleteModal.show = false;
		}

	}

	// show the modal to confirm deleting content
	$scope.showDeleteModal = function(id, section) {

		// delete modal object
		$scope.deleteModal = {
			show: true,
			id: id,
			section: section
		};

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