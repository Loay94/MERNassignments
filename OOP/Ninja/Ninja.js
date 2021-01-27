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

 const ninja= new Ninja('diaa');
 ninja.sayName();
 ninja.showState();
ninja.drinkSake();
 console.log(ninja.health);

