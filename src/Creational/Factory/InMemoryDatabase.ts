interface DatabaseServices<T>{
   create(data:T):void
   read(id:string):void
   update(data:T):void
   delete(id:string):void
}



