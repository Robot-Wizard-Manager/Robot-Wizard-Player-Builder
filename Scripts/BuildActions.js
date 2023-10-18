  function buildList(){
    addAttackActions();
    //addDefenceActions();

    actionList.push(new Action("Special","BasicSmart",(stats,element)=>{
         if(getElementValue(element,stats) >= 1 && stats.defense >= 1 && stats.attack >= 1 && stats.special >= 1)
        {return true}; return false; 
    },
    (stats,element)=>{
        var block = parseInt(50 + 5 * stats.attck + 5 * getElementValue(element,stats);
        var attack = parseInt(100 + 10 * stats.attck + 10 * getElementValue(element,stats);
        var strong =parseInt(block * 1.5);
        var weak = parseInt(attack * .5);
        var cost = 125;
        return "If oppentent does damage then block else attack"+
        `Mana Cost ${cost}\n`+
        `Base ${base} block/attack\n`+
        `Against ${getElementStrong(element)} ${strong} block/attack\n`+
        `Against ${getElementWeak(element)} ${weak} block/attack`
        }));

    
 }
