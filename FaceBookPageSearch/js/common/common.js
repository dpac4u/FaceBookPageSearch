var common = common || {};

common.framework = (function(){
             
                function iterate(obj, elem) 
                {
                    var property;
                    for (var property in obj) {
                        if (obj.hasOwnProperty(property)) {
                            if (typeof obj[property] == "object")
                            {
                                iterate(obj[property]);
                            }
                            else
                            {
                                createElement(elem, property, obj[property]); 
                                //console.log(property + "   " + obj[property]);
                            }
                        }
                    }
                }

                function createElement(elem, cl, content)
                {
                    
                    if(Fb.Request.itemsToInclude.indexOf(cl) != -1)
                    {
                        
                         var result_top = document.createElement("div");
                            result_top.setAttribute("class","img-container");
                        
                        if(cl == "picture")
                        {
                            var result_img = document.createElement("img");
                           result_img.setAttribute("src",content);
                        
                         result_top.appendChild(result_img);
                        }
                                            
                        
                         var result_span = document.createElement("span");
	
                        
                         if(cl == "caption")
                        {
                            var result_label = document.createElement("label");
                        result_label.innerHTML=content;
                        
                         result_span.appendChild(result_label);
                        }
                        
                        
                        
                       
                        if(cl =="message")
                        {
                             var result_link = document.createElement("div");
                                result_link.setAttribute("class","link-tag");
                            
                            var result_link_a=document.createElement("div");
                                result_link_a.setAttribute("class", "label");
                                result_link_a.innerHTML=content;
                            
                             result_link.appendChild(result_link_a);
                            
                             result_span.appendChild(result_link);
                        }
                        
                        var result_like = document.createElement("div");
                            result_like.setAttribute("class","like-tag");
                        
                         result_top.appendChild(result_span);
                        
                         elem.appendChild(result_top);
                        
                         var result_clear = document.createElement("div");
                            result_clear.setAttribute("class","clear-class");
                        
                         elem.appendChild(result_clear);
                        
                        
                        if(cl == "description")
                        {
                            var result_p_div = document.createElement("div");
                           var result_p_div_txt=document.createElement("p");
			                result_p_div_txt.innerHTML=content;
                             result_p_div.appendChild(result_p_div_txt);
                        
                         elem.appendChild(result_p_div);
                        }

                    }
                }

                return {
                    iterate: iterate,
                    createElement: createElement
                }
             
             
            }());