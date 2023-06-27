interface Carc{
   
    getDescription():string

    getCost():number

}


class ModelX implements Carc{

  getDescription(): string {
    return 'ModelX'
  }
  getCost(): number {
    return 1
  }
 
}


class EnhancedSeatsDecorator implements Carc{

  constructor(private car:Carc){}

  getDescription(): string {
    return this.car.getDescription()+',Enhanced Seats'
  }
  getCost(): number {
    return this.car.getCost()+10
  }

}

let carc = new ModelX()

carc = new EnhancedSeatsDecorator(carc)

console.log(carc.getCost())
console.log(carc.getDescription())