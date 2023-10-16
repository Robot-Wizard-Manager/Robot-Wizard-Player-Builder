

var labelType = getLabel("Type","Type")
var type = getType("Type");
function getType(name){
    var typeSelect = document.createElement("select");
    typeSelect.name = name;
    typeSelect.setAttribute( "onchange", "typeChange(this)" );
    var noneOption =document.createElement("option");
    noneOption.innerHTML = "none";
    noneOption.value = "none";
    var attackOption =document.createElement("option");
    attackOption.innerHTML = "attack";
    attackOption.value = "attack";
    var defenseOption =document.createElement("option");
    defenseOption.innerHTML = "defense";
    defenseOption.value = "defense";
    typeSelect.appendChild(noneOption);
    typeSelect.appendChild(attackOption);
    typeSelect.appendChild(defenseOption);
    return typeSelect;
}




function elementSelected(element){

    element.parentElement.appendChild(labelType);
    element.parentElement.appendChild(type);
    //document.body.appendChild(element.parentElement);
  
}
function typeChange(element){
    try{
       element.parentElement.appendChild(getLabel("Action:","action"));
    }catch(error){
       document.getElementById("test").innerHTML = error; 
    }
    
  
    try{
        var labels = getAvaibleActions("attack",statsValues);
        element.parentElement.appendChild(getSelect("action",labels,"action"));
    }catch(error){
       //document.getElementById("test").innerHTML = error; 
    }
}
async function copyBuild() {
  var text = document.getElementById("buildText").innerHTML;
  try {
    await navigator.clipboard.writeText(text);
    alert('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
  } catch (err) {
    alert('Failed to copy: ' + err);
    /* Rejected - text failed to copy to the clipboard */
  }
}
