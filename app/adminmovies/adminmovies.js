(function(){
    
    angular.module("adminmovies", []);
    
    angular.module("adminmovies").controller("adminmoviesCtrl", ["$state",adminmoviesCtrl]);
    
    function adminmoviesCtrl($state){
        var amc = this;
        amc.goToMovies = function(){
            $state.go("movies")
        }
    }
    
})();