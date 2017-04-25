(function(){
    
    angular.module("functions", []);
    
    angular.module("functions").controller("functionsCtrl",["$state",functionsCtrl]);
    
    function functionsCtrl($state){
        
        var fs = this;
        fs.goToMovies = function(){
            $state.go("movies");
        }
        
        fs.goToGames = function(){
            $state.go("games");
        }
        
        fs.goToEmployee = function(){
            $state.go("employee");
        }
        
        fs.goToCustomer = function(){
            $state.go("customer");
        }
        
        fs.goToSupplier = function(){
            $state.go("supplier");
        }
        
    }
    
})();