  function buildList(){
    addAttackActions();
    addDefenceActions();

    actionList.push(new Action("Special","BasicSmart",(stats,element)=>{
         if(getElementValue(element,stats) >= 1 && stats.defense >= 1 && stats.attack >= 1 && stats.special >= 1)
        {return true}; return false; 
    },
    (stats,element)=>{
        var base = parseInt(5 * getMuliOfTwo(stats.defense,50,getElementValue(element,stats),50));
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 13;
        return "If oppentent does damage then block else attack"+
        `Mana Cost ${cost}\n`+
        `Base ${base} block/attack\n`+
        `Against ${getElementStrong(element)} ${strong} block/attack\n`+
        `Against ${getElementWeak(element)} ${weak} block/attack`
        }));

    
 }
