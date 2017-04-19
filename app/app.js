(function(){
    
    angular.module("project",  ["todolist"]);
    
    angular.module("project").controller("mainCtrl", [mainCtrl]);
    
    angular.module("project").config([function(){
        
    }]);
    
    function mainCtrl(){
        var vm = this;
        vm.todoTemplate = "app/todolist/todolist.tpl.html";
    }
    
})();