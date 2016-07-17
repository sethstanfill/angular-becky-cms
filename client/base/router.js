"use strict";

router.$inject = ["$urlRouterProvider", "$locationProvider", "$stateProvider"];

export default function router($urlRouterProvider, $locationProvider, $stateProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
		// base admin template with header and nav
		.state("admin", {
			abstract: true,
			url: "/admin",
			template: require("../components/admin/admin.pug")
		})
		// default template
		.state("admin.default", {
			url: "",
			template: require("../components/admin-pages/default.pug")
		})
		// example pages that can be replaced
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