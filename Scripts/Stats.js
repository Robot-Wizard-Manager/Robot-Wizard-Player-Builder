 var statsValues;

 
 class Stats{
    constructor(maxHealth,healthRegen,maxMana,manaRegen,attack,defense,special,water,fire,earth,air){
        
        this.maxHealth=maxHealth;
        this.healthRegen =healthRegen;
        this.maxMana = maxMana;
        this.manaRegen = manaRegen;
        this.attack = attack;
        this.defense = defense;
        this.special = special;
        this.water = water;
        this.fire = fire;
        this.earth = earth;
        this.air = air;
    }
}
function maxHealthUpdate(input){
    check(input); 
    document.getElementById("MaxHealth").innerHTML = parseInt( 1000 + 1000 * levelScale);
}
function maxManaUpdate(input){
    check(input); 
    document.getElementById("MaxMana").innerHTML =  parseInt(1000 + 1000 * levelScale);

}
function manaRegenUpdate(input){
    check(input); 
    document.getElementById("ManaRegen").innerHTML =  parseInt(100 + 100 * levelScale);

}
function healthRegenUpdate(input){
    check(input);
    document.getElementById("HealthRegen").innerHTML =  parseInt(25 + 25 * levelScale);

}

function check(input){
   try{
    
    var stats = document.querySelectorAll(".stats input");
    var level = document.getElementById("level").value;
   
    var count = 0;
    var length = stats.length;
    function countStats(element){   
        count += parseInt( element.value);
    }
    stats.forEach(countStats);
    if(count > level){
        var excess = count - level;
        input.value = input.value - excess;
    }
    
    buildStats();
    updateAllActions();
   }catch(error)
   {
    alert(error);
   }
   
}
function levelChange(value){
    var stats = document.querySelectorAll(".stats input");
    var level =  value;
   
    stats.forEach((element) =>{element.setAttribute("max",level)});
}
buildStats();
function buildStats(){
    
    var stats = document.querySelectorAll(".stats .display input");
 
    
    var maxHealth = stats[3].value;
    var healthRegen = stats[4].value;
    var maxMana = stats[5].value;
    var manaRegen = stats[6].value;
    var attack = stats[0].value;
    var defense = stats[1].value;
    var special = stats[2].value;
    var water = stats[7].value;
    var fire = stats[8].value;
    var earth = stats[9].value;
    var air = stats[10].value;

    
    statsValues = new Stats(maxHealth,healthRegen,maxMana,manaRegen,attack,defense,special,water,fire,earth,air);

   
         
   
}
function test(){
    document.getElementById("test").innerHTML = "testing";
}
 
