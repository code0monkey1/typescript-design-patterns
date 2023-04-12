interface DatabaseServices<T,R>{

   create(data:T):R|undefined
   read(id:string):R|undefined
   update(data:T):R|undefined
   delete(id:string):R|undefined

}






