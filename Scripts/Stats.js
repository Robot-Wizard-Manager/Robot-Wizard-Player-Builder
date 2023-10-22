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
    document.getElementById("MaxHealth").innerHTML = parseInt( 1000 + 100 * statsValues.maxHealth);
}
function maxManaUpdate(input){
    check(input); 
    document.getElementById("MaxMana").innerHTML =  parseInt(1000 + 100 * statsValues.maxMana);

}
function manaRegenUpdate(input){
    check(input); 
    document.getElementById("ManaRegen").innerHTML =  parseInt(100 + 25 * statsValues.manaRegen);

}
function healthRegenUpdate(input){
    check(input);
    document.getElementById("HealthRegen").innerHTML =  parseInt(25 + 5 * statsValues.healthRegen);

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
function setStats(setStats){
    var stats = document.querySelectorAll(".stats .display input");
    var level = document.getElementById("level");
    level.value = parseInt(setStats.maxHealth) + parseInt(setStats.healthRegen) + parseInt(setStats.maxMana) + parseInt(setStats.manaRegen)
    + parseInt(setStats.attack) + parseInt(setStats.defense) + parseInt(setStats.special)
    + parseInt(setStats.water) + parseInt(setStats.fire) + parseInt(setStats.earth) + parseInt(setStats.air);
    stats[3].value = setStats.maxHealth;
    stats[4].value = setStats.healthRegen;
    stats[5].value = setStats.maxMana;
    stats[6].value = setStats.manaRegen;
    stats[0].value = setStats.attack;
    stats[1].value = setStats.defense;
    stats[2].value = setStats.special;
    stats[7].value = setStats.water;
    stats[8].value = setStats.fire;
    stats[9].value = setStats.earth;
    stats[10].value = setStats.air;
}
function test(){
    document.getElementById("test").innerHTML = "testing";
}
 
