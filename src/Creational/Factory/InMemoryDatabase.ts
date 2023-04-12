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
    
   private db :Record<string,T> ={};
   
   set(newValue: T): void {
       this.db[newValue.id] = newValue;
   }
   get(id: string): T | undefined {
       return this.db[id];
   }
}


const pokemonDb = new InMemoryDatabase<Pokemon>();

pokemonDb.set({
  id:"bulbasaur",
  attack:12,
  power:14
})

console.log(pokemonDb.get("bulbasaur"))

