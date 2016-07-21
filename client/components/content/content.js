"use strict";

// template directive
export function content() {
	return {
		restrict: "A",
		template: require("./content.pug")
	};
};

// content service
contentService.$inject = ["Content"];
export function contentService(Content) {
	return {
		// return current page content
		get: function(page) {

			return Content.find({
				filter: {
					where: {
						page: page
					}
				}
			}).$promise;

		},
		// edit and save content from admin panel
		edit: function(item) {

			item.$save(function() {
				console.log("success");
			}, function() {
				console.log("error");
			});

		}
	};
};