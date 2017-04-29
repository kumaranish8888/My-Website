(function(){
    
    angular.module("customermovies", []);
    
    angular.module("customermovies").controller("customermoviesCtrl", ["$state",customermoviesCtrl]);
    
    function customermoviesCtrl($state){
        var cmc = this;
        cmc.goToAfterbuyone = function(){
            $state.go("afterbuyone");
        }
        
        cmc.goToAfterbuytwo = function(){
            $state.go("afterbuytwo");
        }
        
        cmc.goToAfterrentone = function(){
            $state.go("afterrentone");
        }
        
        cmc.goToAfterrenttwo = function(){
            $state.go("afterrenttwo");
        }
        
        cmc.goToCustomerfunctions = function(){
            $state.go("customerfunctions");
        }
    }
    
})();