import angular from "angular";
import uiRouter from "angular-ui-router";
import router from "./router.js";

//import '../style/app.css';

/*let app = () => {
  return {
    template: require("./app.html"),
    controller: "AppCtrl",
    controllerAs: "app"
  }
};

class AppCtrl {
  constructor() {
    // this.url = 'https://github.com/preboot/angular-webpack';
  }
}*/

const MODULE_NAME = "becky";

angular.module(MODULE_NAME, [uiRouter])
	.config(router);
	//.directive("app", app)
	//.controller("AppCtrl", AppCtrl);

export default MODULE_NAME;