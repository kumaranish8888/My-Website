(function(){
    
    angular.module("project", ["header","login", "ui.router", "signup"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider){
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc"
        };
        
        var signupObj = {
            templateUrl: "app/signup/signup.tpl.html",
            controller: "signupCtrl as sc"
        };
        
        $stateProvider.state("login", loginObj);
        $stateProvider.state("signup", signupObj);
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();