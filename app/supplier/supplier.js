(function(){
    
    angular.module("supplier", []);
    
    angular.module("supplier").controller("supplierCtrl", ["$state",supplierCtrl]);
    
    function supplierCtrl($state){
        
        var sc = this;
        sc.goToFunctions = function(){
            $state.go("functions");
        }
    }
    
})();