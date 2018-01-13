
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    if (document.createEvent) {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else {
        pom.click();
    }
}
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
    
window.onload=function(){
    "use strict"; 
    
     var  namesJs =  ["test 1","Test 2","Test 3"];
     namesJs = toUppSort(namesJs);         
  	  if(store){
         var array =store.get("data");
	      if(array){
	          namesJs = array;
		   }
	  }
	  else{
         alert("Proplem when load store.js library please try reload the page or another browser ");
  	  }
	 
    function searchInItems(txt){
        "use strict";
        var obj = document.getElementsByClassName("itemsP"),
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
       obj.scrollIntoView();
       obj.style.backgroundColor ="#97ff80";
       setTimeout(function(){
           obj.style.backgroundColor="white";
       },1100);
    }
	 function arrayUpt(es){
        "use strict";
        namesJs=toUppSort(namesJs);
        es.names=namesJs;
        if(store){
            store.set("data",namesJs);
        }
       
    }
    /* hide loading */
    var loadDiv = document.getElementById("loadDiv");
    setTimeout(function(){
	     $("#loadDiv").fadeOut(200);
    },500);
    $("#mainDiv").niceScroll({
	       cursorcolor:"#DD0031",
          cursorwidth:"5px"
    });
    var myApp = angular.module("app",[]);
    myApp.controller("con",function($scope){
        "use strict";
        $scope.names = toUppSort(namesJs);
        $scope.edit = function(id){
            var obj = searchInItems(id),
                arrayInd= namesJs.indexOf(id),
                userEnter = prompt("Edit Value",id);
            if(userEnter == "" || userEnter== null){}
            else{
                namesJs[arrayInd] = userEnter;  
                arrayUpt($scope);
                setTimeout(function(){
                     var newObj = searchInItems(userEnter);
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
	               var newObj = searchInItems(userAdd);
                  light(newObj);
              },100);
              
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        };
        $scope.export = function(){
            var txt = "";
            for(var i= 0;i<namesJs.length;i++){
                txt +=namesJs[i] + "\n";
    	      }
	        download("list.txt",txt);
	     };
    });
    
        
    

};

