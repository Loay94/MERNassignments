class Ninja{
    constructor(name){
        this.name = name;
        this.health=100;
        this.speed = 3;
        this.strength=3;
    }
    sayName(){
        console.log(`name of ninja is ${this.name}`);
    }
    showState(){
        console.log(`name : ${this.name} , strength: ${this.strength}, speed : ${this.speed} , health : ${this.health}`)
    }
    drinkSake(){
        this.health += 10;
    }

}

//  const ninja= new Ninja('diaa');
//  ninja.sayName();
//  ninja.showState();
// ninja.drinkSake();
//  console.log(ninja.health);

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom=10;
        this.health=200;
        this.speed=10;
        this.strength=10;
    }
    // we don't take this method because we take the method from super class 
    drinkSake(){
        this.health += 300;
    }
    speakWisdom(){
        super.drinkSake();
    }
}
const ninjaSensei = new Sensei("loay");
ninjaSensei.speakWisdom();
ninjaSensei.showState();
console.log(ninjaSensei.health);