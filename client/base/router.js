"use strict";

router.$inject = ["$urlRouterProvider", "$locationProvider", "$stateProvider"];

export default function router($urlRouterProvider, $locationProvider, $stateProvider) {

	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state("admin", {
			url: "/admin",
			template: require("../components/admin/admin.pug")
		})
		.state("admin.home", {
			url: "/home",
			template: require("../components/admin-pages/home.pug")
		})
		.state("admin.gallery", {
			url: "/gallery",
			template: require("../components/admin-pages/gallery.pug")
		})
		.state("admin.about", {
			url: "/about",
			template: require("../components/admin-pages/about.pug")
		});

	$urlRouterProvider.otherwise("/admin");

};