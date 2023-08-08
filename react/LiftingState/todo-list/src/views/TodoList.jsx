import React, {useState, useEffect} from 'react'
import TodoListForm from '../components/todo-list/TodoListForm'
import TodoListDisplay from '../components/todo-list/TodoListDisplay'

const TodoList = () => {
    //keep track of the todo list
    const [todoList, setTodoList] = useState( () => {
        const savedTasks = JSON.parse(localStorage.getItem('task'));
        return savedTasks || []
    });

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todoList))
    }, [todoList]);
    //create first then update function the list
    const updatedList = (newItem) => {
        setTodoList([...todoList, newItem])
    }
    // delete function
    const removeItemFromList = (deleteIdx) =>{
        const filerList = todoList.filter((eachItem, idx) => idx !== deleteIdx);
        setTodoList(filerList);
    }
//checkbox 
    const updatedItemDone =(updateIdx) => {
        let todoListCopy = [...todoList];
        todoListCopy[updateIdx].isCompleted = todoListCopy[updateIdx].isCompleted ? false :true ;
        setTodoList(todoListCopy)
    }



    return (
        <div>
            <TodoListForm onCreate = {updatedList}/>
            <TodoListDisplay todoList = {todoList} remove = {removeItemFromList} checkbox= {updatedItemDone}/>
        </div>
    )
}

export default TodoList