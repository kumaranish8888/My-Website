(function(){
    
    angular.module("movies", []);
    
    angular.module("movies").controller("moviesCtrl", ["$state",moviesCtrl]);
    
    function moviesCtrl($state){
        
        var ms = this;
        ms.goToFunctions = function(){
            $state.go("functions");
        }
        
    }
    
})();