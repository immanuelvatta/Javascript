import React, {useState} from 'react'


const TodoListForm = (props) => {
    const [addTask, setAddTask] = useState("");


    
    const handleSubmit = (e) =>{
        e.preventDefault();

        const newTask = {
            addTask,
            isCompleted: false,
        };
        props.onCreate(newTask);

    }

    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="task" className="form-label">Add Task</label>
                    <input type="text" className="form-control" name="task" value={addTask} onChange={(e) => setAddTask(e.target.value)}/>
                </div>
                    <button className="btn btn-primary mt-3" type="submit">Add</button>
            </form>
        </div>

    )
    }

export default TodoListForm