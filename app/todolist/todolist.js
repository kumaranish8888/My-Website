(function(){
    
    angular.module("todolist", []);
    
    angular.module("todolist").controller("todoCtrl", ["$scope",todoCtrl]);
    
    function todoCtrl($scope){
        var tm = this;
        $scope.myData = function(){
            
           var myNodelist = document.getElementsByTagName("LI");
        var i;
            
        for (i = 0; i < myNodelist.length; i++) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          myNodelist[i].appendChild(span);
        }



        // When you click on a list item then it is checked
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
          }
        }, false);

        // Add item to the existing list
          var li = document.createElement("li");
          var inputValue = document.getElementById("myInput").value;
          var t = document.createTextNode(inputValue);
          li.appendChild(t);
          if (inputValue === '') {
            alert("You must write something!");
          } else {
            document.getElementById("myUL").appendChild(li);
          }
          document.getElementById("myInput").value = "";

          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);

          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }   
                }
            }

})();