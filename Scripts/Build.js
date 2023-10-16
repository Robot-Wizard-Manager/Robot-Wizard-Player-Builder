alert("Hello! I am an alert box!! In Build.js");
class Data{
    constructor(stats,actions){
        this.stats = stats;
        this.actions = actions;
    }
 }
 class ActionBuild{
    constructor(element,name){
        this.element = element
        this.name = name;
    }
 }

function build(){
    try{
        var actions = document.getElementById("actionList").querySelectorAll(".FullAction");
       
        var actionBuild = [];

        for(var count = 0;count<actions.length;count += 1){
            var action = actions[count];
            var element = action.querySelector("#Element").value;
            var name = action.querySelector("#Action").value;
           // if (name != "None")
            actionBuild.push(new ActionBuild(element,name));
        }
           
        
    

        var data = new Data(statsValues,actionBuild);
        document.getElementById("buildText").innerHTML = JSON.stringify(data); 
    }catch(error){
        document.getElementById("test").innerHTML = error + " in funciton Build"; 
    }
    

}
