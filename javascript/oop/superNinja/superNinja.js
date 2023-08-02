class Ninja{
    
    constructor(name, health = 90,speed = 3,strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(`Name: ${this.name}`);
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
        return this
    }
    drinkSake(){
        console.log(`${this.name} drank sake! health restored 10hp`);
        this.health +=10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name = "Anonymous", wisdom=10){
        super(name, 200, 10, 10);
        // super(name);
        // this.health = 200;
        // this.strength = 10;
        // this.speed = 10;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        const wisdomDrink = super.drinkSake();
        wisdomDrink;
        console.log(`What one programmer can do in one month, two programmers can do in two months. Wisdom: ${this.wisdom}`);
        return this;
    }

}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom().showStats();
// -> "What one programmer can do in one month, two programmers can do in two months."

// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats();
