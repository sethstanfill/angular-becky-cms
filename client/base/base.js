// base
import angular from "angular";
import uiRouter from "angular-ui-router";
import router from "./router.js";

// admin
import {
  adminNavController,
  adminNav
} from "../components/admin/admin-nav.js";

import "../components/admin/admin-nav.less";

angular.module("becky", [uiRouter])
  
  // base
	.config(router)

  // Admin
  .directive("adminNav", adminNav)
  .controller("adminNavController", adminNavController);