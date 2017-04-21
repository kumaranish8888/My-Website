(function(){
    
    angular.module("project", ["header","register","ui.router"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider",function($stateProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };
        
        $stateProvider.state("register", registerObj);
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();