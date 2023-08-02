class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
        
    }
    attack(target){
        if( target instanceof Unit ) {
            //reduce target res by power
            target.resilience -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name,cost,stat, magnitude){
        super(name,cost);
        this.stat = stat;
        this.magnitude= magnitude;
        //find if its increasing or reducing based on magnitude being positive or negative
        let incOrDec = ""
        // if(magnitude < 0){
        //     incOrDec = "reduce"
        // }else{
        //     incOrDec = "increase"
        // }
        //if else using ternary ops
        magnitude < 0 ? incOrDec = "reduce" : incOrDec = "increase"
        this.text = `${incOrDec} the target's ${this.stat} by ${Math.abs(this.magnitude)}`;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if(this.stat == 'resilience'){
                // square bracket for DRY??
                target["resilience"] += this.magnitude;
                console.log(this.text);
            }else if (this.stat == 'power'){
                target.power += this.magnitude;
                console.log(this.text);
            }else{
                console.log("Invalid move");
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
//* Turn 1
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2,"resilience", 3);
console.log(`rbn current resilience: ${redBeltNinja.resilience}`);
hardAlgorithm.play(redBeltNinja);
console.log(`rbn current resilience: ${redBeltNinja.resilience}`);

//* Turn 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2);
console.log(`rbn current resilience: ${redBeltNinja.resilience}`);
unhandledPromiseRejection.play(redBeltNinja);
console.log(`rbn current resilience: ${redBeltNinja.resilience}`);

//* Turn 3
const pairProgramming = new Effect("Pair Programming", 3,"power", 2);
console.log(`rbn current resilience: ${redBeltNinja.resilience}`);
pairProgramming.play(redBeltNinja);
console.log(`rbn current power: ${redBeltNinja.power}`);
redBeltNinja.attack(blackBeltNinja);
console.log(`bbn current resilience: ${blackBeltNinja.resilience}`);
