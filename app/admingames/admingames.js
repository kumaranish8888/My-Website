(function(){
    
    angular.module("admingames", []);
    
    angular.module("admingames").controller("admingamesCtrl", ["$state",admingamesCtrl]);
    
    function admingamesCtrl($state){
        var agc = this;
        agc.goToGames = function(){
            $state.go("games")
        }
        
    }
    
})();