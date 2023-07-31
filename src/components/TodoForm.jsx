import { useState } from "react";

export default function TodoForm({onSubmit}){
    
    const [inputData, setInputData] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(!inputData){
            console.log("add input now")
            return alert("add a todo to this list now");
        }else{
            if(inputData === "") return
           onSubmit(inputData)
           
            }       
      return  setInputData("")
    //    console.log(todos)
    }

    return(
        <> 
            <form onSubmit={handleSubmit}>   
                <input value={inputData} onChange={e => setInputData(e.target.value)} type="text" />
                <button className="Submit">Submit</button>
            </form>
           
        </>
    )
}