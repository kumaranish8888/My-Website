(function(){
    
    angular.module("admin", []);
    
    angular.module("admin").controller("adminCtrl", ["$state",adminCtrl]);
    
    function adminCtrl($state){
        
        var ac= this;
        ac.goToFunctions = function(){
            $state.go("functions");
        }
        
    }
    
})();