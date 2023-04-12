
abstract class AbstractDatabase<T>{

     private db:Record<string,T> ={}

     abstract set(newValue:T):void
     abstract get(id:string):T|undefined
}

class InMemoryDatabase<T> extends AbstractDatabase<T>{
    
  get(id: string) {
      return undefined;
  }
  set(newValue: T): void {
      
  }

}

type Pokemon={
  id: string,
  attack:number,
  power:number
}
const pokemonDb =  new InMemoryDatabase<Pokemon>() ;

// pokemonDb.set({
//   id:"bulbasaur",
//   attack:12,
//   power:14
// })

// console.log(pokemonDb.get("bulbasaur"))

