import React from "react";
import { useState } from "react";



let golid = 0
function Todolist() {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([
    ])

    function addTask(event) {
        event.preventDefault()
        setTodos(oldTodos => {
            setTask('')
            return [...oldTodos, { todo: task, id: golid++ }]
        })

    }
    function deleteitem(itemid) {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== itemid))

    }

    return (

        <>
            <div className="container">
                <h1 className="text-center head p-3 text-white ">Todo  List App</h1>

                <div className="card shadow">
                    <div className="card-title">
                        <form className="text-center m-2" onSubmit={addTask}>
                            <input className="textbox m-4" type="text" value={task}
                                onChange={(event) => {
                                    setTask(event.target.value)
                                }} />
                            <button type="submit" className="btn text-white bttn">AddTask</button>


                        </form>

                        <div className="card-body">
                            <ul className="list-group list-group-flush" >
                                {todos.map((item, index) => {
                                    return <div key={item.index}>
                                        <li className="list-group-item list-group-item d-flex justify-content-between align-items-start">{item.todo}
                                            <span className="badge  rounded-pill">
                                                <button className="btn btn-danger" onClick={() => deleteitem(item.id)} >Delete</button>
                                            </span>
                                        </li>

                                    </div>

                                })}
                            </ul>
                        </div>
                    </div>
                </div>







        <footer>
         <div><p className="text-center bg-dark mt-4 text-white">Developed by Lakshmi Narayana</p></div>
         </footer>
         </div>




        
        </>



    )
}
export default Todolist;