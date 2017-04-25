(function(){
    
    angular.module("games", []);
    
    angular.module("games").controller("gamesCtrl", ["$state",gamesCtrl]);
    
    function gamesCtrl($state){
        var gc = this;
        gc.goToFunctions = function(){
            $state.go("functions");
        }
    }
    
})();