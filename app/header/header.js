(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc","$state",headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc, $state){
        var hc = this;
        hc.brand= "Home";
        hc.navbarItems = headerSvc.navItems();
        hc.goToState = function(){
            $state.go("home");
        }
        
    }
    
    function headerSvc(){
        this.navItems = function(){
            return [
                {
                    "key":"login", "value":"Login"
                },
                {
                    "key":"register", "value":"Register"
                },
                {
                    "key":"products", "value":"Products"
                },
                {
                    "key":"comments", "value":"Comments"
                }
            ];
        }
    
    }
    
})();