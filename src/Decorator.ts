abstract class Car{
   
     description:string 
       
     constructor(description:string,cost:number){
         this.description=description
     }
   
     getDescription(){
          return this.description
     }

     abstract cost() :number
      
}