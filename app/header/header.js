(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["$state",headerCtrl]);
    
    function headerCtrl($state){
        var hc = this;
        hc.navItems = [
            
            {
                "key": "admin",
                "value": "Admin Login"
            },
            {
                "key": "signup",
                "value": "Customer SignUp"
            }
        ];
        hc.goToLogin = function(){
            $state.go("login");
        }
        
        
    }
    
})();