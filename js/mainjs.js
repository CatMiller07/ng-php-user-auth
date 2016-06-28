// router and controller
var app = angular.module("userAuth",["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/" ,{
		  templateUrl:"partials/login.html",
		  controller:"loginCtrl"
		  
	 })
	.when("/register",{
		  templateUrl:"partials/register.html",
		    controller:"registerCtrl"  
	 })
	.when("/userAdmin",{
		  templateUrl:"partials/userAdmin.html",
		   controller:"userAdminCtrl"
     });
});
	 

app.controller("loginCtrl", function($scope){
			  $scope.msg ="User Login ";
});
app.controller("registerCtrl", function($scope){
			  $scope.msg ="Member Resigtration";
});
app.controller("userAdminCtrl", function($scope){
			  $scope.msg ="User Administration Page";
});


		   