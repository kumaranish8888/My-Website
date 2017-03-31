(function(){
    
    
    angular.module("common", []);
    
    angular.module("common").directive("brandName", [brandName]);
   // angular.module("common").directive("navBar", [navBar]);
    angular.module("common").directive("numbersOnly", [numbersOnly]);
    angular.module("common").directive("checkUsername", [checkUsername]);
    
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
    
    function numbersOnly(){
        return {
            restrict:"A",
            link: function(scope, element, attrs){
                var maxlength = attrs[maxlength];
                element.bind("keypress",function(e){
                    var selected = e.key;
                    var reg = new RegExp(/^[0-9]+$/);
                    if(!reg.test(selected) || this.value.length > maxlength){
                        e.preventDefault();
                    }
                })
            }
        };
    }
    
    function checkUsername(){
        return {
            restrict:"A",
            require:"ngModel",
            link: function(scope, element, attrs, ctrl){
                var usernames = ["Bikash", "Sandeep", "Anchal", "Joyab", "Ram", "Shyam"];
                ctrl.$parsers.unshift(checkValidity);
                function checkValidity(data){
                    if(_.contains(usernames,data)){
                        ctrl.$setValidity("checkuser", false);
                    }else {
                        ctrl.$setValidity("checkuser", true);
                    }
                }
            }
        };
    }
    
})();