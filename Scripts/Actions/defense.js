 function addDefenceActions(){
    actionList.push(new Action("Defense","WeakDefense",(stats,element)=>{return true},
    (stats,element)=>{
        var base = parseInt(25 + (stats.defense * 2.5) + (getElementValue(element,stats) * 2.5) );
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 25;
        return `Mana Cost ${cost}\n`+
        `Base ${base} block\n`+
        `Against ${getElementStrong(element)} ${strong} block\n`+
        `Against ${getElementWeak(element)} ${weak} block`
    }));
        
    actionList.push(new Action("Defense","BasicDefense",(stats,element)=>{return true},
    (stats,element)=>{
        var base = parseInt(50 + (stats.defense * 5) + (getElementValue(element,stats) * 5) );
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 40;
        return `Mana Cost ${cost}\n`+
        `Base ${base} block\n`+
        `Against ${getElementStrong(element)} ${strong} block\n`+
        `Against ${getElementWeak(element)} ${weak} block`
    }));
   
    actionList.push(new Action("Defense","StrongDefense",(stats,element)=>{ if(getElementValue(element,stats) >= 1 || stats.defense >= 2) {return true}; return false; },
    (stats,element)=>{
        var base = parseInt(100 + (stats.defense * 10) + (getElementValue(element,stats) * 10) );
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 80;
        return `Mana Cost ${cost}\n`+
        `Base ${base} block\n`+
        `Against ${getElementStrong(element)} ${strong} block\n`+
        `Against ${getElementWeak(element)} ${weak} block`
        }));
    actionList.push(new Action("Defense","LuckyDefense",(stats,element)=>{ if((getElementValue(element,stats) >= 1 || stats.defense >= 2) && getElementValue(getElementStrong(element),stats) >= 1) {return true}; return false; },
    (stats,element)=>{
        var base = parseInt(40 + (stats.defense * 5) + (getElementValue(element,stats) * 5) );
        var strong =parseInt( base * 3);
        var weak = parseInt(base * .5);
        var strongElement = getElementStrong(element);
        var cost = 50;
        return `Has more defense agaist ${strongElement}\n` +
        `Mana Cost ${cost}\n`+
        `Base ${base} block\n`+
        `Against ${strongElement} ${strong} block\n`+
        `Against ${getElementWeak(element)} ${weak} block`
        }));
    actionList.push(new Action("Defense","SafeDefense",(stats,element)=>{if((getElementValue(element,stats) >= 1 || stats.defense >= 2) && getElementValue(getElementWeak(element),stats) >= 1) {return true}; return false; },
    (stats,element)=>{
        var base = parseInt(40 + (stats.defense * 5) + (getElementValue(element,stats) * 5) );
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .9);
        var strongElement = getElementStrong(element);
        var weakElement = getElementWeak(element);
        var cost = 50;
        return `Loses less defense agaist ${weakElement}\n` +
        `Mana Cost ${cost}\n`+
        `Base ${base} block\n`+
        `Against ${strongElement} ${strong} block\n`+
        `Against ${weakElement} ${weak} block`
        }));
 }
