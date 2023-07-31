import { useState } from "react";
// import {Link} from "react-router-dom";
import  {useNavigate} from "react-router-dom";
import TodoForm from './TodoForm';
// import FullTodoList from './FullTodoList';

export default function Todo (){
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])
    // const empty = "";
    function addTodo(title){
        setTodos((currentTodos) =>{
            return [
                ...currentTodos,
                {id:crypto.randomUUID(), title}
            ]
        })
    //    setInputData("")
       console.log(todos)
    }

    function deleteTodo(id){
         setTodos(currentTodos =>{
            return  currentTodos.filter(todos =>(todos.id !== id))
        })
    }
    
    return(
    <>
        <section>
            <div className="to-do">
                <TodoForm onSubmit={addTodo}/>
            </div>
        <div className="div1">
            <ul className="List">
                
                {todos.map((todo) =>
                {
                    const j = todo.title;
                        // let k = j.length;
                        // const nonSpaceRegex = /\S/g;
                    const l = j;
                   
                    if(l.length >  11){
                        console.log(l.slice(0, 11))
                    }
                     
                    return( 
                        <li key={todo.id} onClick={()=>{navigate("/FullTodoList", {state:{j}})}}>
                            <button className="delete" onClick={() => deleteTodo(todo.id)}>X   </button>
                            {
                                 l.length >  11 ?
                                 l.slice(0, 11) : l
                            }     
          {/* <Link to="/FullTodoList" state={j} >atHomet</Link> */}
                        </li>              
                    )
                })}
            </ul>
        </div>
        </section>
    </>
    )
}


