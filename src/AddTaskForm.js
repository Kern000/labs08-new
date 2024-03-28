import React from "react";

export default function AddTaskForm(props){

    return (
        <React.Fragment>
            <h2> Create new Task </h2>
            <div>
                <label> Task Description </label>
                <input  type="text"
                        name="newTaskName"
                        value={props.newTask}
                        onChange={(event)=> props.setNewTask(event.target.value)}
                />
                <button onClick={props.addTask}> Add </button>
            </div>
            <p> "This is a new Task State:" {props.newTask} </p>
        </React.Fragment>
    )
}