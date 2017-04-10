(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
    
    function brandName (){
        return {
            template: '<a class="navbar-brand" href="#">{{hc.brand}}</a>',
            restrict: "A"
        };
    }
    
})();