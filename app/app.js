(function(){
    
    angular.module("project", ["header","login", "ui.router"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider","$urlRouterProvider",function($stateProvider){
        
        var loginObj = {
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl as lc"
        };
        
        $stateProvider.state("login", loginObj);
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();