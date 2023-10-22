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
var listForActions = document.getElementById("actionList");

var list = document.getElementsByClassName('FullAction')[0];


//addAction();
function addAction(){
    try{
        listForActions.appendChild(list.cloneNode(true));
    }catch(error){
        document.getElementById("test").innerHTML = error + " at add action";
       
    }
}
function setAllActions(actions){
    listForActions.replaceChildren([]);
    
    actions.forEach(element => {
        var newElement = list.cloneNode(true);
        newElement.querySelector("#Element").value = element.element;
        var type = "None";
        if(element.name.includes("Attack")){
            type = "Attack";
        }else if(element.name.includes("Defense")){
            type = "Defense";
        }else{
            type = "Special";
        }
   
        newElement.querySelector("#Type").value = type;
        actionUpdate(newElement);
        newElement.querySelector("#Action").value = element.name;
        changeDescription(newElement.querySelector("#Action"))

        listForActions.appendChild(newElement);
    });

}




