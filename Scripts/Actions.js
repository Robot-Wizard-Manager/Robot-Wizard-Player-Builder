 class Action{
    constructor(type,name,requirment,description){
        this.type = type;
        this.requirment = requirment;
        this.name = name;
        this.description = description;
    }
    tryGet(type,stats,element){
        if(type == this.type){
        //    document.getElementById("test").innerHTML = stats;
            if(this.requirment(stats,element)){
                
                return this
            } 
        }
        return null;
    }
    getDescription(stats,element){
        return this.description(stats,element);
    }
 }

 

 function getElementValue(element,stats){
    if(element == "Water"){
        return stats.water;
    }else if (element == "Fire"){
        return stats.fire;
    }else if (element == "Earth"){
        return stats.earth;
    }else if (element == "Air"){
        return stats.air;
    }  
 }
 function getElementStrong(element){
    switch (element){
        case "Water":
            return "Fire";
        case "Fire":
            return "Earth";
        case "Earth":
            return "Air";
        case "Air":
            return "Water";
    }
 }
 function getElementWeak(element){
    switch (element){
        case "Water":
            return "Air";
        case "Fire":
            return "Water";
        case "Earth":
            return "Fire";
        case "Air":
            return "Earth";
    }
 }
 var actionList = [];
 buildList();
 function getAvaibleActions(type,stats,element){

    var list = [];
   
    actionList.forEach((value)=>{var action = value.tryGet(type,stats,element); if(action != null)list.push(action); });
    
    return list;
   
 }

 function setActions(actionList,currentAction,element,type){
    try{
    if (element == "None" || type == "None") return;
    var stilHaveCurrentAction = -1;
    var actions = getAvaibleActions(type,statsValues,element);

    var options = []

    var count = 0;
    actions.forEach((action)=>{
        count +=1;
        if(action.name == currentAction) stilHaveCurrentAction = count;
        var option = getOption(action.name);
        var text;
        text = action.name.replace("Attack","");
        text = text.replace("Defense","");
        var title = action.getDescription(statsValues,element);
        setTextTitle(option,text,title);
        options.push(option);
    });
    var noneOption = getOption("None");
    setTextTitle(noneOption,"None","Nothing");
    options.unshift(noneOption);
 
    //document.getElementById("test").innerHTML = actions;
    var select = getSelect(options);
    setNameIdClass(select,"Action");
    select.setAttribute("onchange","changeDescription(this)");
    if (stilHaveCurrentAction > -1){
        
        select.selectedIndex = stilHaveCurrentAction;
    }
   
 
   // waydoesthi("test");
    // document.getElementById("test").innerHTML = "work2";
   // select.setAttribute("onchange","changeDescription(this)");
    actionList.replaceWith(select);

    }catch(error){
        document.getElementById("test").innerHTML = error + " setActions " + statsValues;
    }
  
 }
 function changeDescription(element){
   
    var actionName = element.value;
 
    var description = "None";
    try{
        actionList.forEach((value)=>{if(value.name == actionName)
        description = value.getDescription(statsValues,element.parentElement.querySelector("#Element").value)});
        element.setAttribute("title",description);

    }catch(error){
        document.getElementById("test").innerHTML = error ;
    }
   
 }
 
 function actionUpdate(li){
     try{
    var liElement = li;
    var elementValue = liElement.querySelector("#Element").value;
    var typeValue =  liElement.querySelector("#Type").value;
    var action = liElement.querySelector("#Action");
    var actionValue = action.value;

    setActions(action,actionValue,elementValue,typeValue);
    }catch(error){
        document.getElementById("test").innerHTML = error;
    }
 }
 function updateAllActions(){
     var actions = document.getElementById("actionList").querySelectorAll(".FullAction");
     actions.forEach((action)=>{actionUpdate(action);  changeDescription(action.querySelector("#Action"))});
    
 }
 var levelScale = 1.25;
 function getMuliOfTwo(muli1,percent1,muli2,percent2){
    var totalPercent = percent1+percent2
    var scale = (muli1*percent1 + muli2 * percent2)/parseFloat( totalPercent);
   // document.getElementById("test").innerHTML = muli1;
    return Math.pow(levelScale,parseFloat(scale));

 }



