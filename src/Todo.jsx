export default function Todo ({task, isDone}) {
    
                    if(isDone){
   return <h1>{task} finised</h1>
                    }
                 return <h1>not finised</h1>
     
}