abstract class GenericCar{
   
     public abstract description:string

    public getDescription():string{
          return this.description
     }

    public abstract cost() :number
      
    }


class ModelX extends GenericCar{

  public description='ModelX'

  public cost(): number {
    return 2000
  }
  
}


class ModelS extends GenericCar{

  public description='ModelS'

  public cost(): number {
    return 40000
  }
  
}


abstract class GenericCarDecorator extends GenericCar{
  
     public abstract decoratedCar:GenericCar
     public abstract cost(): number
     public abstract getDescription(): string

    }



class EnhancedAutopilot extends GenericCarDecorator{

  public description='enhanced autopilot'
  public decoratedCar: GenericCar

   constructor( decoratedCar:GenericCar){
       super()

        this.decoratedCar = decoratedCar
     }

  public cost(): number {
    return this.decoratedCar.cost()+234
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription()+',Enhanced AutoPilot'
  }
  
}

class BetterSeats extends GenericCarDecorator{

  public description='enhanced autopilot'
  public decoratedCar: GenericCar

   constructor( decoratedCar:GenericCar){
    
       super()

        this.decoratedCar = decoratedCar
     }

  public cost(): number {
    return this.decoratedCar.cost()*0
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription()+',BetterSeats'
  }
  
}

let newTesla :GenericCar = new EnhancedAutopilot(new ModelS()) 
newTesla = new BetterSeats(newTesla)

console.log("Cost : ",newTesla.cost())

console.log("Description : ",newTesla.getDescription())