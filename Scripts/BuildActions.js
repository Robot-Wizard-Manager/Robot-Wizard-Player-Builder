  function buildList(){
    addAttackActions();
    addDefenceActions();
    /*
    actionList.push(new Action("Special","BasicSmart",
    (stats,element)=>{ 
      if(getElementValue(element,stats) >= 1 && stats.defense >= 1 && stats.attack >= 1 && stats.special >= 1)
      {return true}; return false; },
    (stats,element)=>{
        
        var attack = parseInt(50 + 5 * stats.attck + 5 * getElementValue(element,stats);
        var block = parseInt(100 + 10 * stats.attck + 10 * getElementValue(element,stats);
        var strongB =parseInt(block * 1.5);
        var weakB = parseInt(block * .5);
        var strongA = parseInt(attack * 1.5);
        var weakA = parseInt(attack * 1.5);
        var cost = 125;
        return "If oppentent does damage then block else attack"+
        `Mana Cost ${cost}\n`+
        `Base ${block} block or ${attack} attack\n`+
        `Against ${getElementStrong(element)} ${strongB} block or ${strongA} attack\n`+
        `Against ${getElementWeak(element)} ${weakB} block or ${weakA} attack`
      }
    ));*/
    actionList.push(new Action("Special","BasicSmart",
    (stats,element)=>{ if(getElementValue(element,stats) >= 1 && stats.defense >= 1 && stats.attack >= 1 && stats.special >= 1)
      {return true}; return false;},
    (stats,element)=>{
        
        var base = parseInt(25 + (stats.attack * 2.5) + (getElementValue(element,stats) * 2.5) );
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 50;
        return `Mana Cost ${cost}\n`+
        `Base ${base} damage\n`+
        `Against ${getElementStrong(element)} ${strong} damage\n`+
        `Against ${getElementWeak(element)} ${weak} damage`}
    ));
    

    
 }
