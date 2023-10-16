 function addAttackActions(){
   actionList.push(new Action("Attack","WeakAttack",
    (stats,element)=>{return true},
    (stats,element)=>{
        
        var base = parseInt(25 * getMuliOfTwo(stats.attack,50,getElementValue(element,stats),50));
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 50;
        return `Mana Cost ${cost}\n`+
        `Base ${base} damage\n`+
        `Against ${getElementStrong(element)} ${strong} damage\n`+
        `Against ${getElementWeak(element)} ${weak} damage`}
    ));
    actionList.push(new Action("Attack","BasicAttack",
    (stats,element)=>{return true},
    (stats,element)=>{
        
        var base = parseInt(50 * getMuliOfTwo(stats.attack,50,getElementValue(element,stats),50));
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 100;
        return `Mana Cost ${cost}\n`+
        `Base ${base} damage\n`+
        `Against ${getElementStrong(element)} ${strong} damage\n`+
        `Against ${getElementWeak(element)} ${weak} damage`}
    ));
    actionList.push(new Action("Attack","StrongAttack",(stats,element)=>{ if(getElementValue(element,stats) >= 1 || stats.attack >= 2) {return true}; return false; },
    (stats,element)=>{
        var base = parseInt(100 * getMuliOfTwo(stats.attack,50,getElementValue(element,stats),50));
        var strong =parseInt( base * 1.5);
        var weak = parseInt(base * .5);
        var cost = 210;
        return `Mana Cost ${cost}\n`+
        `Base ${base} damage\n`+
        `Against ${getElementStrong(element)} ${strong} damage\n`+
        `Against ${getElementWeak(element)} ${weak} damage`
    }));
 }
