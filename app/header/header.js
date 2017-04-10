(function(){
    
    angular.module("header", []);
    
    angular.module("header").controller("headerCtrl", ["headerSvc",headerCtrl]);
    
    angular.module("header").service("headerSvc", [headerSvc]);
    
    function headerCtrl(headerSvc){
        var hc=this;
        hc.brand = "Bitblogger";
        hc.navItems = headerSvc.getNav();
        
        
    }
    
    function headerSvc(){
        var hs = this;
        hs.getNav = function(){
            return [
                {"key":"login","value":"Login"},
                {"key":"posts","value":"Posts"},
                {"key":"register","value":"Register"},
                {"key":"products","value":"Products"}
            ];
        }
        
        
    }
    
})();