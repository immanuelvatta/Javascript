// constructing a class : constructor & methods

class Developer{
    constructor(name = "Anonymous Developer", salary = 80000, yearsOfExperience = 0){
        this.name= name;
        this.salary = salary;
        this.yearsOfExperience = yearsOfExperience;
        this.languages = [];
        this.brainCell = 100;
    }
    displayInfo(){ // function inside a class: method
        console.log(`------- Developer: ${this.name} -------`) // this refers to the current instance
        console.log(`Salary: ${this.salary}`)
        console.log(`yearsOfExperience: ${this.yearsOfExperience}`)
        console.log(`languages: ${this.languages}`)
        console.log(`brainCell: ${this.brainCell}`)
        return this;
    }
    debug(){
        console.log(`${this.name} is debugging..... never ending......`)
        this.brainCell --;
        this.salary++;
        return this;
    }
}

// inheriting a class
class SeniorDeveloper extends Developer{
    constructor(){
        super("Anonymous Senior Developer", 150000, 5);
        this.hasLife = false;
    }
    displayInfo(){
        super.displayInfo()
        console.log(`Life: ${this.hasLife}`)
    }
}

// test case
const dev1 = new Developer();
dev1.displayInfo();

const dev2 = new Developer("Immanuel", 100000)
dev2.displayInfo();
dev2.debug().debug().displayInfo().debug();

const dev3 = new SeniorDeveloper();
dev3.displayInfo(dev3.hasLife);