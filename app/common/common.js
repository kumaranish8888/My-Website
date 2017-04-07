(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
    angular.module("common").directive("details", [details]);
    
    function brandName(){
        return {
            template: '<a class="navbar-brand" href="#">{{hc.brand}}</a>'  
        };
    }
    
    function details(){
        return {
            restrict: "A",
            template: '<input type = "text" class="form-control" ng-model="item">',
            scope : {
                item : "="
            }
        };
    }
    
})();