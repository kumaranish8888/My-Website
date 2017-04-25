(function(){
    
    angular.module("employee", []);
    
    angular.module("employee").controller("employeeCtrl", ["$state",employeeCtrl])
    
    function employeeCtrl($state){
        var ec = this;
        ec.goToFunctions = function(){
            $state.go("functions");
        }
        
    }
    
})();