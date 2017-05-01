(function(){
    
    angular.module("project", ["header","login", "ui.router", "buy", "rent", "functions", "movies", "games", "employee", "customer", "supplier", "admin", "customerfunctions", "customermovies", "adminmovies", "customergames", "admingames", "afterbuyone", "afterbuytwo", "payment", "afterrentone", "afterrenttwo", "gamebuyone", "gamebuytwo", "gamerentone", "gamerenttwo"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider, $urlRouterProvider, $locationProvider){
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc",
            url : '/'
        };
        
        var homeObj = {
            templateUrl: "app/home/home.tpl.html",
            controller: "homeCtrl as hc",
            url:'/home'
        };
        
        var buyObj = {
            templateUrl: "app/buy/buy.tpl.html",
            controller: "buyCtrl as bc",
            url: '/buy'
        };
        
        var rentObj = {
            templateUrl: "app/rent/rent.tpl.html",
            controller: "rentCtrl as rc",
            url: '/rent'
        };
        
        var functionsObj = {
            templateUrl: "app/functions/functions.tpl.html",
            controller: "functionsCtrl as fc",
            url:'/functions'
        };
        
        var moviesObj = {
            templateUrl: "app/movies/movies.tpl.html",
            controller: "moviesCtrl as mc",
            url:'/movies'
        };
        
        var gamesObj = {
            templateUrl: "app/games/games.tpl.html",
            controller: "gamesCtrl as gc",
            url:'/games'
        };
        
        var employeeObj = {
            templateUrl: "app/employee/employee.tpl.html",
            controller: "employeeCtrl as ec",
            url:'/employee'
        };
        
        var customerObj = {
            templateUrl: "app/customer/customer.tpl.html",
            controller: "customerCtrl as cc",
            url:'/customer'
        };
        
        var supplierObj =  {
            templateUrl: "app/supplier/supplier.tpl.html",
            controller:  "supplierCtrl as sc",
            url:'/supplier'
        };
        
        var adminObj = {
            templateUrl: "app/admin/admin.tpl.html",
            controller: "adminCtrl as ac",
            url:'/admin'
        };
        
        var customerfunctionsObj = {
            templateUrl: "app/customerfunctions/customerfunctions.tpl.html",
            controller: "customerfunctionsCtrl as cuf",
            url:'/customerfunctions'
        };
        
        var customermoviesObj = {
            templateUrl: "app/customermovies/customermovies.tpl.html",
            controller: "customermoviesCtrl as cmc",
            url:'/customermovies'
        };
        
        var adminmoviesObj = {
            templateUrl: "app/adminmovies/adminmovies.tpl.html",
            controller: "adminmoviesCtrl as amc",
            url:'/adminmovies'
        };
        
        var customergamesObj = {
            templateUrl: "app/customergames/customergames.tpl.html",
            controller: "customergamesCtrl as cgc",
            url:'/customergames'
        };
        
        var admingamesObj = {
            templateUrl: "app/admingames/admingames.tpl.html",
            controller: "admingamesCtrl as agc",
            url:"/admingames"
        };
        
        var afterbuyoneObj = {
            templateUrl: "app/afterbuyone/afterbuyone.tpl.html",
            controller: "afterbuyoneCtrl as aboc",
            url:'/afterbuyone'
        };
        
        var signupObj = {
            templateUrl: "app/signup/signup.tpl.html",
            controller: "signupCtrl as suc",
            url:'/signup'
        };
        
        var afterbuytwoObj = {
            templateUrl: "app/afterbuytwo/afterbuytwo.tpl.html",
            controller: "afterbuytwoCtrl as abtc",
            url:'/afterbuytwo'
        };
        
        var paymentObj = {
            templateUrl: "app/payment/payment.tpl.html",
            controller: "paymentCtrl as payc",
            url:'/payment'
        };
        
        var afterrentoneObj = {
            templateUrl: "app/afterrentone/afterrentone.tpl.html",
            controller: "afterrentoneCtrl as aroc",
            url:'/afterrentone'
        };
        
        var afterrenttwoObj = {
            templateUrl: "app/afterrenttwo/afterrenttwo.tpl.html",
            controller: "afterrenttwoCtrl as artc",
            url:'/afterrenttwo'
        };
        
        var gamebuyoneObj = {
            templateUrl: "app/gamebuyone/gamebuyone.tpl.html",
            controller: "gamebuyoneCtrl as gboc",
            url:'/gamebuyone'
        };
        
        var gamebuytwoObj = {
            templateUrl: "app/gamebuytwo/gamebuytwo.tpl.html",
            controller: "gamebuytwoCtrl as gbtc",
            url:'/gamebuytwo'
        };
        
        var gamerentoneObj = {
            templateUrl: "app/gamerentone/gamerentone.tpl.html",
            controller: "gamerentoneCtrl as groc",
            url:'/gamerentone'
        };
        
        var gamerenttwoObj = {
            templateUrl: "app/gamerenttwo/gamerenttwo.tpl.html",
            controller: "gamerenttwoCtrl as grtc",
            url:'/gamerenttwo'
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
        $stateProvider.state("afterbuyone", afterbuyoneObj);
        $stateProvider.state("signup", signupObj);
        $stateProvider.state("afterbuytwo", afterbuytwoObj);
        $stateProvider.state("payment", paymentObj);
        $stateProvider.state("afterrentone", afterrentoneObj);
        $stateProvider.state("afterrenttwo",afterrenttwoObj);
        $stateProvider.state("gamebuyone", gamebuyoneObj);
        $stateProvider.state("gamebuytwo", gamebuytwoObj);
        $stateProvider.state("gamerentone", gamerentoneObj);
        $stateProvider.state("gamerenttwo", gamerenttwoObj);
        
        $urlRouterProvider.otherwise('/');
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();