(function(){
    
    angular.module("project", ["header", "common", "ui.router", "register"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config(["$stateProvider", function($stateProvider){
        
        var registerObj = {
            templateUrl: "app/register/register.tpl.html"
        };
        
        $stateProvider.state("register", registerObj);
        
        
    }])
    
    function mainCtrl(){
        var vm = this;
        vm.headerTemplate = "app/header/header.tpl.html";
    }
    
})();