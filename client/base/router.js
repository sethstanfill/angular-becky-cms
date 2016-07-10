"use strict";

router.$inject = ["$urlRouterProvider", "$locationProvider", "$stateProvider"];

export default function router($urlRouterProvider, $locationProvider, $stateProvider) {

	$locationProvider.html5Mode(true);
	
	$stateProvider
		.state("admin", {
			url: "/admin",
			template: require("../components/admin/home.html")
		});

};