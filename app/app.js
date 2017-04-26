(function(){
    
    angular.module("project", ["header","login", "ui.router", "buy", "rent", "functions", "movies", "games", "employee", "customer", "supplier", "admin", "customerfunctions", "customermovies", "adminmovies", "customergames", "admingames"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc",
            url : '/'
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc"
        };
        
        var buyObj = {
            templateUrl: "app/buy/buy.tpl.html",
            controller: "buyCtrl as bc"
        };
        
        var rentObj = {
            templateUrl: "app/rent/rent.tpl.html",
            controller: "rentCtrl as rc"
        };
        
        var functionsObj = {
            templateUrl: "app/functions/functions.tpl.html",
            controller: "functionsCtrl as fc"
        };
        
        var moviesObj = {
            templateUrl: "app/movies/movies.tpl.html",
            controller: "moviesCtrl as mc"
        };
        
        var gamesObj = {
            templateUrl: "app/games/games.tpl.html",
            controller: "gamesCtrl as gc"
        };
        
        var employeeObj = {
            templateUrl: "app/employee/employee.tpl.html",
            controller: "employeeCtrl as ec"
        };
        
        var customerObj = {
            templateUrl: "app/customer/customer.tpl.html",
            controller: "customerCtrl as cc"
        };
        
        var supplierObj =  {
            templateUrl: "app/supplier/supplier.tpl.html",
            controller:  "supplierCtrl as sc"
        };
        
        var adminObj = {
            templateUrl: "app/admin/admin.tpl.html",
            controller: "adminCtrl as ac"
        };
        
        var customerfunctionsObj = {
            templateUrl: "app/customerfunctions/customerfunctions.tpl.html",
            controller: "customerfunctionsCtrl as cuf"
        };
        
        var customermoviesObj = {
            templateUrl: "app/customermovies/customermovies.tpl.html",
            controller: "customermoviesCtrl as cum"
        };
        
        var adminmoviesObj = {
            templateUrl: "app/adminmovies/adminmovies.tpl.html",
            controller: "adminmoviesCtrl as amc"
        };
        
        var customergamesObj = {
            templateUrl: "app/customergames/customergames.tpl.html",
            controller: "customergamesCtrl as cgc"
        };
        
        var admingamesObj = {
            templateUrl: "app/admingames/admingames.tpl.html",
            controller: "admingamesCtrl as agc"
        };
        
        $stateProvider.state("login", loginObj);
        $stateProvider.state("home", homeObj);
        $stateProvider.state("buy", buyObj);
        $stateProvider.state("rent", rentObj);
        $stateProvider.state("functions", functionsObj);
        $stateProvider.state("movies", moviesObj);
        $stateProvider.state("games", gamesObj);
        $stateProvider.state("employee", employeeObj);
        $stateProvider.state("customer", customerObj);
        $stateProvider.state("supplier", supplierObj);
        $stateProvider.state("admin", adminObj);
        $stateProvider.state("customerfunctions", customerfunctionsObj);
        $stateProvider.state("customermovies", customermoviesObj);
        $stateProvider.state("adminmovies", adminmoviesObj);
        $stateProvider.state("customergames", customergamesObj);
        $stateProvider.state("admingames", admingamesObj);
        
        $urlRouterProvider.otherwise('/');
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();