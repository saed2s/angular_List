
   function  upperStr(obj){
       "use strict";
        var firstLatter = obj[0].toUpperCase();
        return firstLatter + obj.slice(1);
    }
    function upperArray(array){
       "use strict";
        var finalArray = [];
        for(var i in array){
           var firstLatter = array[i][0].toUpperCase();
           finalArray.push(firstLatter + array[i].slice(1));
        }
        return finalArray ;
    }
    function toUppSort(array){
        "use strict";
         var finalArray= upperArray(array);
         return finalArray.sort() ;
    }
    function arrayUpt(es){
        "use strict";
        namesJs=toUppSort(namesJs);
        es.names=namesJs;
    }
window.onload=function(){
	    "use strict"; 
	     /// load Font awesome 
	     var headHTML = document.getElementsByTagName('head')[0].innerHTML;
        headHTML    += '<link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">';
        document.getElementsByTagName('head')[0].innerHTML = headHTML;
        
        var namesJs = ['Basel','Ahmad','Khaled','Belal'],
        namesJs = toUppSort(namesJs);

    
    function searchInLi(txt){
        "use strict";
        var obj = document.getElementsByTagName("li"),
            value = new RegExp(txt.trim(),"i");
        for (var i = 0; i<obj.length; i++){
            var ma =obj[i].innerText.trim().match(value);
            if (ma != null){
                if(ma == obj[i].innerText.trim()){
                    return obj[i];
                }
            }
        }
    }
    function light(obj){
       "use strict";
       obj.style.backgroundColor ="#97ff80";
       setTimeout(function(){
           obj.style.backgroundColor="white";
       },1100);
    }
    /* hide loading */
    var loadDiv = document.getElementById("loadDiv");
    setTimeout(function(){
	     $("#loadDiv").fadeOut(200);
    },400);
    var myApp = angular.module("app",[]);
    myApp.controller("con",function($scope){
        "use strict";
        $scope.names = toUppSort(namesJs);
        $scope.edit = function(id){
            var obj = searchInLi(id),
                arrayInd= namesJs.indexOf(id),
                userEnter = prompt("Edit Value",id);
            if(userEnter == "" || userEnter== null){}
            else{
                namesJs[arrayInd] = userEnter;  
                arrayUpt($scope);
                setTimeout(function(){
                     var newObj = searchInLi(userEnter);
                    light(newObj);
                },100);
            }
        };
        $scope.del = function(id){
            "use strict";
            if(confirm(" Delete : (" + id + ") ?")){
                var arrayIndDel= namesJs.indexOf(id);
                namesJs.splice(arrayIndDel,1);
                arrayUpt($scope);
                
            }
        };
        $scope.add = function(){
          "use strict";
          var userAdd = prompt("Enter value :");
          if(userAdd=="" || userAdd == null){}
          else{
              namesJs.push(userAdd);
              arrayUpt($scope);
              setTimeout(function(){
                  var newObj = searchInLi(userAdd);
                  light(newObj);
              },100);
              
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        };
        
    });
    
        
    

};

