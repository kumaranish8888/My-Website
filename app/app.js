(function(){
    
    angular.module("project", ["header", "ui.router", "register", "common", "home"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            url:'/register'
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            url:'/home'
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("home", homeObj);
        
        $urlRouterProvider.otherwise('/home');
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        
    }
})();