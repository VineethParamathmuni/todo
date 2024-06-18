import React, { useState } from "react";
import "./styles.css";

export default function Searchbox() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [currentTask, setCurrentTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  function addTask() {
    if (newTask.length) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    if(window.confirm("Are you sure you want to delete")){
      setTasks(tasks.filter((_, i) => i !== index));
      setIsEditing(false);
    }    
  }

  function editStart(index){
    setIsEditing(true);
    setEditIndex(index);
    setCurrentTask(tasks[index])    
  }

  function editTask(){
    if(currentTask.length){
      const updatedTasks = tasks.map((task, index) => 
        index === editIndex ? currentTask : task)
      setTasks(updatedTasks);
    }
    setIsEditing(false);
    setCurrentTask("");
    setEditIndex(null);
  }

  return (
    <>
    <h2>Todo management application</h2>
      <input
        type="text"
        value={isEditing ? currentTask : newTask}
        placeholder="Enter the task"
        onChange={
          (e) => { isEditing ? setCurrentTask(e.target.value) : setNewTask(e.target.value)}
        }
      />
      <button onClick={isEditing ? editTask : addTask}>{isEditing ? `Update` : `Add`}</button>      
      {tasks.map((task, index) => (
        <p key={index}>
          {task}
          <button onClick={() => {deleteTask(index)}} >
            Delete
          </button>
          <button onClick={() => {editStart(index)}}>Edit</button>
        </p>
      ))}
    </>
  );
}


