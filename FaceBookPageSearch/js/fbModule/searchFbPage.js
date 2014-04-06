var Fb = Fb || {};

Fb.Request = (function(){
 var element = document.getElementById("result");
 var itemsToInclude = ["caption","description", "picture", "message"];
 var textColor = "#000";
 var accessToken = 'CAACEdEose0cBAMgbLellmXpGZAnaDrLOeqM0BJ01a3nqQTq4ClTrQkP76L3c30K8lMe9HbFkIt04l9BBFNTiRaAC4KNO5yOKCuTuhbLhypJ8GHcjYf2aueFvVHkqJfihknG4kEylfT8BxZCTNKtQoYvNSeCCXZAw26gZAujsUhJScuk0XzkZCi4A7cKYJZC6bZAyy0AVWdNSAZDZD';  
    
    // set color
	function SetColor(col) {
		textColor = col;
	}
    
    // clear all results
	function Clear() {
		element.innerHTML = "";
	}

    
    function GetSearchResult(url)
    {
       
        if(url == undefined)
        {
               FB.api('/search?q=platform&access_token=' + accessToken, function(response)
               {
                    console.log(response);
//                   if(response.paging.next)
//                    {
//                        var e = document.createElement('button');
//                                 e.setAttribute("id", "next");
//                                 e.setAttribute("href", response.paging.next);
//                                 //e.setAttribute("onclick", "pagination()");
//                                 e.innerHTML = "Next";
//                                 document.getElementById("pagination").appendChild(e);
//                                 
//                        
//                    }
//                    else if(response.paging.previous)
//                    {
//                        var e = document.createElement('button');
//                                 e.setAttribute("id", "previous");
//                                 e.setAttribute("href", response.paging.previous);
//                                 e.innerHTML = "Previous";
//                                 //e.setAttribute("onclick", "pagination()");
//                                 document.getElementById("pagination").appendChild(e);
//                    }
                  
                   for(var i = 0; i < response.data.length; i++)
                   {
                       var e = document.createElement('div');
                               e.setAttribute("class", "main-container");
                               document.getElementById("result").appendChild(e);
                               common.framework.iterate(response.data[i], e);
                   }
                   

               })
        }
        else
        {
                FB.api(url, function(response)
               {
                   console.log(response);
                   common.framework.iterate(response);

               })
        }
        
        
       
    }
    
    
    
    return {
		GetSearchResult: GetSearchResult,
		SetColor: SetColor,
		Clear: Clear,
        itemsToInclude: itemsToInclude
	};


}());