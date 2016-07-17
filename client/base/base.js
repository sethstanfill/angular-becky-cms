// base
import angular from "angular";
import uiRouter from "angular-ui-router";
import router from "./router.js";

// admin nav
import {
  adminNavController,
  adminNav
} from "../components/admin/admin-nav.js";

// admin panel
import {
  adminPanelController,
  adminPanel
} from "../components/admin/admin-panel.js";

// import styles into this file
import "./common.less";
	
// add your modules here
angular.module("becky", [uiRouter])
  
	// base
	.config(router)

	// admin nav
	.directive("adminNav", adminNav)
	.controller("adminNavController", adminNavController)

	// admin panel
	.directive("adminPanel", adminPanel)
	.controller("adminPanelController", adminPanelController);