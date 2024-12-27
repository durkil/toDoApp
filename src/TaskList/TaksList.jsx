import { useState } from "react";
import Button from "../Button/Button";

export default function TaskList(){
    const[tasks, setTasks] = useState(['Clean the room', 'Call mom', 'Go to the shop']);
    const[newTask, setNewTask] = useState('');

    function addTask(){
        if(newTask.trim() !== ''){
             setTasks((tasks) => [...tasks, newTask]);
             setNewTask('');
        }
    }

    function upTask(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index-1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index-1]];
            setTasks(updatedTasks);
        }
    }

    function downTask(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="tasks">
            <h1>To Do List</h1>
            <div className="task-input">
                <input type="text" 
                        placeholder="Enter a task" 
                        value={newTask} 
                        onChange={(event) => setNewTask(event.target.value)}/>
            </div>
            <div className="add-task-button">
                <Button onClick={addTask}>Add</Button>
            </div>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}<Button onClick={() => upTask(index)} disabled={index === 0}>Up</Button><Button onClick={() => downTask(index)} disabled={index === tasks.length - 1}>Down</Button></li>)}
            </ul>
        </div>
    )
}