(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc","$state", "$scope", "$rootScope", headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerSvc(){
        
        this.navbarItem = function(){
        return [
            {"key":"posts", "value": "Posts"},
            {"key":"login", "value": "Login"},
            {"key":"register", "value": "Register"},
            {"key":"products", "value": "Products"}
        ];
        }
    }
    
    function headerCtrl(headerSvc, $state, $scope, $rootScope){
        var hc = this;
        hc.cartItems = 0;
        hc.brand = "BitBlogger";
        hc.navItems = headerSvc.navbarItem();
        
        hc.goToState = function(data){
            $state.go(data);
        }
        
        $rootScope.$on("ADD-ITEM-TO-CART", function(){
            hc.cartItems++;
        })
        
        hc.goToThisState = function(){
            $state.go("home");
        }
        
    }
    
})();