 function getLabel(name,forwhat){
    var label = document.createElement("label");
    label.htmlFor =forwhat;
    label.innerHTML = name;
    return label;
}
 function getOption(value){
    var option = document.createElement("option");
    option.value = value;
  
    return option;
 }
 function getSelect(elements){
    var select = document.createElement("select");
    elements.forEach((value)=>{select.appendChild(value)});
    return select;

 }
 function getLi(){
    var li = document.createElement("li");  
    return li;
 }
 function setNameIdClass(element,idSet,classSet,nameSet){
    if(idSet != null && idSet != undefined)
   element.setAttribute("id",idSet);
    if(classSet != null && classSet != undefined)
   element.setAttribute("class",classSet);
   if(nameSet != null && nameSet != undefined)
   element.setAttribute("name",nameSet);
}
function setTextTitle(element,text,title){
   element.innerHTML = text;
   if(title != null && title != undefined)
   element.setAttribute("title",title);
}
function deleteParentParent(element){
   var parent = element.parentElement.parentElement;
   parent.remove();
}

