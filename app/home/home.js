(function(){
    
    angular.module("home", []);
    
    angular.module("home").controller("homeCtrl", [homeCtrl]);
    
    function homeCtrl(){
        console.log("Home controller");
    }
    
})();