(function(){
    
    angular.module("login", []);
    
    angular.module("login").controller("loginCtrl", ["$state",loginCtrl]);
    
    function loginCtrl($state){
        var lo = this;
        lo.goToCustomerFunctions = function(){
            $state.go("customerfunctions");
        }
    }
    
})();