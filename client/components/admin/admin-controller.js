"use strict";

adminController.$inject = ["$scope", "$state", "contentService", "adminService"];

export function adminController($scope, $state, contentService, adminService) {

	// admin display nav
	$scope.siteName = "Becky CMS Admin Portal";
	
	// define your pages here
	$scope.pages = {
		home: "Home",
		gallery: "Gallery",
		about: "About Us"
	};

	// check if user is authorized admin
	$scope.isAuthorized = function() {

		adminService.isAuthorized().then(function(response) {
			$scope.admin = response;	// store admin credentials
		}, function() {
			$state.go("admin.default");	// no user detected so redirect to login page
		});

	};
	$scope.isAuthorized();				// check for authorized user on load

	// used to reset creation form data after saving
	$scope.resetFormData = function() {

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

	// delete content based on modal
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

	// login to admin portal
	$scope.login = function() {
		adminService.login($scope.contentForm).then(function() {
			$scope.isAuthorized();	// check if login was successful and get authorized
		});
	};

	// logout of admin portal
	$scope.logout = function() {
		adminService.logout().then(function() {
			$state.reload(); // reload controller to unauthorize admin
		});
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