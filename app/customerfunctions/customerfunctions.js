(function(){
    
    angular.module("customerfunctions", []);
    
    angular.module("customerfunctions").controller("customerfunctionsCtrl",["$state",customerfunctionsCtrl]);
    
    function customerfunctionsCtrl($state){
        
        var cuf = this;
        cuf.goToMovies = function(){
            $state.go("customermovies");
        }
        
    }
    
})();