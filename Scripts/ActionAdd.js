/*
var listForActions = document.getElementById("actionList");
const elementLabel = getLabel("Choose a element","element");
const elementSelect = getSelect("element",["None","Water","Fire","Air","Earth"],"element");
elementSelect.setAttribute("onchange","setActions(this)");
const typeLabel = getLabel("Type","type");
const typeSelect = getSelect("type",["None","Attack","Defense","Special"],"type");
typeSelect.setAttribute("onchange","setActions(this)");
const actionLabel = getLabel("Action: ","action");
const actionSelect = getSelect("action",["None","test"],"action");
*/
alert("Hello! I am an alert box!! First");
var listForActions = document.getElementById("actionList");
alert("Hello! I am an alert box!! Middle");
var list = document.getElementsByClassName('FullAction')[0];
alert("Hello! I am an alert box!! Last");

//addAction();
function addAction(){
    try{
        listForActions.appendChild(list.cloneNode(true));
    }catch(error){
        document.getElementById("test").innerHTML = error;
       
    }
    
  
}



