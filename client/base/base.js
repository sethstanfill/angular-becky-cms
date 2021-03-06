// base
import angular from "angular";
import resource from "angular-resource";
import uiRouter from "angular-ui-router";
import lbServices from "./lb-services";
import router from "./router.js";

// admin
import {
  adminController,
  adminNav,
  adminPanel
} from "../components/admin/admin-controller";
import adminService from "../components/admin/admin-service";

// content
import {
	content,
	contentService
} from "../components/content/content";

// import styles into this file
import "./common.less";
	
// add your modules here
angular.module("becky", [uiRouter, lbServices])
  
	// base
	.config(router)

	// admin
	.directive("adminNav", adminNav)
	.directive("adminPanel", adminPanel)
	.controller("adminController", adminController)
	.factory("adminService", adminService)

	// content
	.directive("content", content)
	.factory("contentService", contentService);