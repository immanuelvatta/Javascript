import React from 'react'

const TodoListDisplay = (props) => {

    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todoList.map((eachTask, idx) => {
                            console.log(eachTask)
                            return (
                                <tr key={idx}>
                                    <td>{!eachTask.isCompleted ? eachTask.addTask : <s>{eachTask.addTask}</s>}</td>
                                    <td><input type="checkbox" checked={eachTask.isCompleted} name="check" onChange={()=> props.checkbox(idx)} /> <button className='btn btn-danger' type='button' onClick={() => props.remove(idx)}>Delete</button></td> 
                                    {/* we need callback function or it'll be iife immediately invoked function expression (we dont want it to run when the page is loaded) */}
                                </tr>
                                
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TodoListDisplay