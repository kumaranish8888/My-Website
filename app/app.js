(function(){
    
    angular.module("project", ["header", "ui.router", "register", "common", "home", "products"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            url:'/register'
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            url:'/'
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller: "productsCtrl as pc",
            url:'/products'
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("home", homeObj);
        $stateProvider.state("products", productsObj);
        
        $urlRouterProvider.otherwise('/');
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
        
    }
})();