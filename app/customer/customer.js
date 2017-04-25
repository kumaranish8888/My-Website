(function(){
    
    angular.module("customer", []);
    
    angular.module("customer").controller("customerCtrl",  ["$state",customerCtrl]);
    
    function customerCtrl($state){
        var cc = this;
        cc.goToFunctions = function(){
            $state.go("functions");
        }
    }
    
})();