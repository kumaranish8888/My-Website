(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc","$state","$rootScope",headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc, $state, $rootScope){
        var hc = this;
        hc.cartItems = 0;
        hc.brand= "Home";
        hc.navbarItems = headerSvc.navItems();
        hc.goToState = function(){
            $state.go("home");
        }
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(){
            hc.cartItems++;
        })
        
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