type Car ={
  name:string,
  model:string,
  year:Date,
}

type Mercedes = Car & {
 
}

interface CarFactory < T extends Car>{
   
   introduceYourself(car :T):string
  
}