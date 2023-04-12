interface Car {
   name:string,
   model:string,
   year:string,
}

class Mercedes implements Car{
   
   name="Merc"
   model ="S class"
   year = new Date().getFullYear().toString()

    acceleration(){
    console.log("I acceleration is 30km/hr")
   }
}
interface CarFactory < T extends Car>{
   
   introduceYourself(car :T):void
   
}

 const getCar = <T extends Car> ()=>{
  class TeslaCarFactory<T extends Car> implements CarFactory<T >{
      
      introduceYourself(car: T): void {
          
      }
    }

  return new TeslaCarFactory
}

let car = new Mercedes()

