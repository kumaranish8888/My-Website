(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc",headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc){
        var hc = this;
        hc.cartItems =  0;
        hc.navItems =  headerSvc.getNavItems();
        
    }
    
    function headerSvc(){
        var hs = this;
        hs.getNavItems = function(){
            return [
                {"key":"login","value":"Login"},
                {"key":"register","value":"Register"},
                {"key":"products","value":"Products"},
                {"key":"posts","value":"Posts"},
            ];
        }
    }
    
})();