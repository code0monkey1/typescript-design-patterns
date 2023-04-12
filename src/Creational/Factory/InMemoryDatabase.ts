type BaseType={
  id:string
}
type Pokemon={
  id:string,
  attack:number,
  power:number
}

type Database <T extends BaseType> ={
     set(newValue:T):void
     get(id:string):T|undefined
}


class InMemoryDatabase<T extends BaseType> implements Database<T> {
  
   set(newValue: T): void {
       
   }
   get(id: string): T | undefined {
       return undefined
   }
}
