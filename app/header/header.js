(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc","$rootScope", "$scope",headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc, $rootScope, $scope){
        var hc = this;
        hc.cartItems = 0;
        hc.getNavitems = headerSvc.navItems();
        hc.brand = "BitBlogger";
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(){
            hc.cartItems++;
        })
    }
    
    function headerSvc(){
        var hs = this;
        hs.navItems = function(){
            return [
            {
                "key": "login",
                "value": "Login"
            },
            {
                "key": "register",
                "value": "Register"
            },
            {
                "key": "products",
                "value": "Products"
            }
        ]
        }
    }
    
})();