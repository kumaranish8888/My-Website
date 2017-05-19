(function(){
    
    angular.module("register", []);
    
    angular.module("register").controller("registerCtrl", ["registerSvc",registerCtrl]);
    
    angular.module("register").service("registerSvc", ["$http",registerSvc]);
    
    function registerCtrl(registerSvc){
        var rc = this;
        registerSvc.getCountries().then(function(response){
            rc.myCountries = response.data.countries;
        }).catch(function(){
            
        }).finally(function(){
            
        });
        
    }
    
    function registerSvc($http){
        
        var rs = this;
        rs.getCountries = function(){
            return $http.get("api/countries.json");
        }
        
    }
    
})();