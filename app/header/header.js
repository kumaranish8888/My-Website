(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["$state",headerCtrl]);
    
    function headerCtrl($state){
        var hc = this;
        hc.navItems = [
            {
                "key":"movies",
                "value":"Movies"
            },
            {
                "key":"games",
                "value":"Games"
            },
            {
                "key": "admin",
                "value": "Admin Login"
            }
        ];
        hc.goToLogin = function(){
            $state.go("login");
        }
        
        
    }
    
})();