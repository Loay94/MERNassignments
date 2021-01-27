class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }

}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        target.res -= this.power;
    }
    viewStatus(){
        console.log(`resilience: ${this.res}, power: ${this.power}`)
    }
}
class Effect extends Card{
    constructor(name,cost,stat,magnitude,text){
        super(name,cost)
    this.stat=stat;
    this.magnitude=magnitude;
    this.text=text;

    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat=="resilience"){
                target.res+=this.magnitude;
            }
            if(this.stat=="power"){
                target.power+=this.magnitude;
            }      
          } 
          else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const unitOne=new Unit("Red Belt Ninja",3,3,4);
const effectOne=new Effect("Hard Algorithm",2,"resilience",+3,"increase target's resilience by 3");
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
effectOne.play(unitOne);
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
console.log("****************************************");
const unitTwo=new Unit("Black Belt Ninja",4,5,4);
const effectTwo=new Effect("Unhandled Promise Rejection",1,"resilience",-2,"reduce target's resilience by 2");
console.log(`Resilience: ${unitTwo.res}, Power: ${unitTwo.power}`)
effectTwo.play(unitTwo);
console.log(`Resilience: ${unitTwo.res}, Power: ${unitTwo.power}`)
console.log("****************************************");
const effectThree=new Effect("Pair Programming",3,"power",+2,"increase target's power by 2");
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
effectThree.play(unitOne);
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
console.log("****************************************");
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
console.log(`Resilience: ${unitTwo.res}, Power: ${unitTwo.power}`)
unitOne.attack(unitTwo);
console.log(`Resilience: ${unitOne.res}, Power: ${unitOne.power}`)
console.log(`Resilience: ${unitTwo.res}, Power: ${unitTwo.power}`)






