"use strict";

adminService.$inject = ["Admin"];

export default function adminService(Admin) {
	return {
		// check if user is authorized
		isAuthorized: function() {
			return Admin.getCurrent().$promise;
		},
		// login admin user for cms portal
		login: function(form) {

			return Admin.login({
				email: form.email,
				password: form.password
			}).$promise;

		},
		// logout admin user from cms portal
		logout: function() {
			return Admin.logout().$promise;
		}
	};
};