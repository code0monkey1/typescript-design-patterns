interface Car {
   name:string,
   model:string,
   year:string,
}

let Mercedes :Car={
  model:"S-class",
  name:"Merc",
  year:'01-02-2020'
}


interface CarFactory < T extends Car>{
   
   introduceYourself(car :T):void
   
}

 const getCarFactory = <T extends Car> ()=>{
    class MyCarFactory implements CarFactory<T>{
      
      introduceYourself(car: T): void {
          console.log("Hi my name is : " + car.name);
          console.log("I was made in the year : ",car.year)
      }
    }

  return new MyCarFactory
}

let carFactory = getCarFactory<Car>()
