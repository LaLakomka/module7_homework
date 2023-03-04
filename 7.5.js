let sumPower = 0;
class Appliances {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.turnedOff = true;
  }
  Off(){
    if(!this.turnedOff){
      this.turnedOff = true;
      sumPower -= this.power;
      console.log(`${this.name} выключен`);
    }else{
      console.log("Прибор уже выключен, нельзя повторно выключать");
    }
  }
  included(){
    if(this.turnedOff){
      this.turnedOff = false;
      sumPower += this.power;
      console.log(`${this.name} включен с мощностью ${this.power}`);
    }else{
      console.log("Прибор уже включен, нельзя повторно включать");
    }
  }
}
class telephoneItem extends Appliances {
  constructor(name, power) {
    super(name, power);
  }
}
class lampItem extends Appliances {
  constructor(name, power) {
    super(name, power);
  }
}
const lamp = new lampItem('Лампа', 15);
const telephone = new telephoneItem('Телефон', 20);
lamp.included();
telephone.included();
telephone.included();
telephone.Off();
console.log(sumPower);