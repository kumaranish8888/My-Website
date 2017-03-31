(function(){
    
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
   // angular.module("common").directive("navBar", [navBar]);
    
    function brandName(){
        return {
            template: '<a class="navbar-brand" href="#">{{hc.brand}}</a>'  
        };
    }
    
  /*  function navBar(){
        return {
            templateUrl: "app/header/header.tpl.html",
            restrict: "A"
        };
    } */
    
})();