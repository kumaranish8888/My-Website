(function(){
    
    angular.module("common", []);
    
    angular.module("common").directive("chechUserName", [chechUserName]);
    angular.module("common").directive("onlyNumbers", [onlyNumbers]);
    angular.module("common").directive("brandName", [brandName]);
    angular.module("common").directive("navBar", [navBar]);
    
    
    function navBar(){
        return {
            templateUrl: "app/header/header.tpl.html",
            restrict: 'A'
        }
    }
    
    
    function brandName(){
        return {
            template:'<a class="navbar-brand" href="#">{{hc.brand}}</a>'
        }
    }
    
    
    function chechUserName(){
        return {
            restrict :  'A',
            require: 'ngModel',
            link: function(scope, attrs, element, ctrl){
                var usernames = ["Anish", "Bikash", "Anchal", "Sandeep"];
                ctrl.$parsers.unshift(validateUser);
                function validateUser(data){
                    if(_.contains(usernames, data)){
                        ctrl.$setValidity('checkuser', false)
                    }else{
                        ctrl.$setValidity('checkuser', true)
                    }
                    return data;
                }
            }
        }
    }
    
    function onlyNumbers(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind("keypress", function(e){
                    var selectedkey = e.key;
                    var reg = new RegExp(/^[0-9]+$/);
                    if(reg.test(selectedkey)){
                        
                    }else{
                        e.preventDefault();
                    }
                })
            }
        }
    }
    
})();