interface Car {
   name:string,
   model:string,
   year:string,
}

interface Mercedes extends Car{
  acceleration():void
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

  return  MyCarFactory
}

let CarFactory = getCarFactory<Mercedes>()

let mercedeseCar =  new CarFactory() 

let myCar:Mercedes={

    acceleration() {
        console.log("acceleration is 20km/hr")
    },
    model:"S-Class",
    name:"Merc",
    year:"20-12-2009",
}

mercedeseCar.introduceYourself(myCar)