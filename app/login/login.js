(function(){
    
    angular.module("login", []);
    
    angular.module("login").controller("loginCtrl", ["$state",loginCtrl]);
    
    function loginCtrl($state){
        var lo = this;
        lo.goToFunctions = function(){
            $state.go("functions");
        }
    }
    
})();