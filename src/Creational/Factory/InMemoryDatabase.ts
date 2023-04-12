
type BaseClass={
  id: string
}

abstract class AbstractDatabase<T extends BaseClass>{

    protected db:Record<string,T> ={}

     abstract set(newValue:T):void
     abstract get(id:string):T|undefined
}

class InMemoryDatabase<T extends BaseClass> extends AbstractDatabase<T>{
    

  get(id: string) {
      console.log("The database is",this.db)
      return this.db[id]
  }
  set(newValue: T): void {
      this.db[newValue.id] = newValue
  }

}

type Pokemon={
  id: string,
  attack:number,
  power:number
}
const pokemonDb =  new InMemoryDatabase<Pokemon>() ;

pokemonDb.set({
  id:"bulbasaur",
  attack:12,
  power:14
})

console.log(pokemonDb.get("bulbasaur"))

