import { useState } from "react";
// import {Link} from "react-router-dom";
import  {useNavigate} from "react-router-dom";
import TodoForm from './TodoForm';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from "@fortawesome/free-solid-svg-icons"

export default function Todo (){
    const navigate = useNavigate()
    const [todos, setTodos] = useState([])

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
                    const l = j;

                    if(l.length >  11){
                        console.log(l.slice(0, 11))
                    }
                     
                    return( 
                        <>
                        <div className="container">
                            <div className="clicked">
                         <FontAwesomeIcon className="icon" icon={faTrash}   key={todo.id} onClick={() => deleteTodo(todo.id)}></FontAwesomeIcon> 
                         </div>
                         <div className="carrier">
                        <li key={todo.id} onClick={()=>{navigate("/FullTodoList", {state:{j}}
                             )
                             }
                             }
                        >
                           
                            {
                                 l.length >  11 ?
                                 l.slice(0, 11) : l
                            }     
          {/* <Link to="/FullTodoList" state={j} >atHomet</Link> */}
                        </li> 
                        </div>
                        </div>
                         </>        
                    )
                })}
            </ul>
        </div>
        </section>
    </>
    )
}


