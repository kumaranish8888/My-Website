(function(){
    
    angular.module("project", ["header", "register", "ui.router", "products", "common", "login"]);
    
    angular.module("project").config(["$stateProvider", function($stateProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        var productsObj = {
            templateUrl: "app/products/products.tpl.html",
            controller: "productsCtrl as pc"
        };
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as ll"
        };
        
        $stateProvider.state("register", registerObj);
        $stateProvider.state("products", productsObj);
        $stateProvider.state("login", loginObj);
        
    }]);
    
    angular.module("project").controller("mainCtrl", [mainctrl]);
    
    function mainctrl(){
        
        var mn = this;
        mn.headerTemplate = "app/header/header.tpl.html";
        
    }
    
})();