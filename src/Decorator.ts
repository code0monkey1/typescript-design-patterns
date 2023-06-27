abstract class Car{
   
     public abstract description:string

    public getDescription():string{
          return this.description
     }

    public abstract cost() :number
      
    }


class ModelX extends Car{

  public description='ModelX'

  public cost(): number {
    return 2000
  }
  
}


class ModelS extends Car{

  public description='ModelS'

  public cost(): number {
    return 40000
  }
  
}


abstract class CarDecorator extends Car{
     public abstract decoratedCar:Car
     public abstract cost(): number
     public abstract getDescription(): string



    }



class EnhancedAutopilot extends CarDecorator{

  public description='enhanced autopilot'
  public decoratedCar: Car

   constructor( decoratedCar:Car){
    
       super()

        this.decoratedCar = decoratedCar
     }

  public cost(): number {
    return this.cost()+234
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription()+',Enhanced AutoPilot'
  }
  
}

let newTesla :Car = new EnhancedAutopilot(new ModelS()) 

console.log("Cost",newTesla.cost())

console.log("Description",newTesla.getDescription())