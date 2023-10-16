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
    document.getElementById("MaxHealth").innerHTML = parseInt( 1000 * getMuliOfTwo(statsValues.maxHealth,50,0,50));
}
function maxManaUpdate(input){
    check(input); 
    document.getElementById("MaxMana").innerHTML =  parseInt(1000 * getMuliOfTwo(statsValues.maxMana,50,0,50));

}
function manaRegenUpdate(input){
    check(input); 
    document.getElementById("ManaRegen").innerHTML =  parseInt(100 * getMuliOfTwo(statsValues.manaRegen,50,0,50));

}
function healthRegenUpdate(input){
    check(input);
    document.getElementById("HealthRegen").innerHTML =  parseInt(25 * getMuliOfTwo(statsValues.healthRegen,50,0,50));

}

function check(input){
   
    
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
 
