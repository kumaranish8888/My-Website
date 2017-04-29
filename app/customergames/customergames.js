(function(){
    
    angular.module("customergames", []);
    
    angular.module("customergames").controller("customergamesCtrl", ["$state",customergamesCtrl]);
    
    function customergamesCtrl($state){
        
        var cgc = this;
        cgc.goToCustomerfunctions = function(){
            $state.go("customerfunctions");
        }
        
        cgc.goToGamebuyone = function(){
            $state.go("gamebuyone");
        }
        
        cgc.goToGamebuytwo = function(){
            $state.go("gamebuytwo");
        }
        
        cgc.goToGamerentone = function(){
            $state.go("gamerentone");
        }
        
        cgc.goToGamerenttwo = function(){
            $state.go("gamerenttwo");
        }
        
    }
    
})();