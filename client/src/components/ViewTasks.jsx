// src/pages/ViewTasks.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import { Link, useNavigate } from 'react-router-dom';



function ViewTasks() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    const req = new Request(
      'http://localhost:3000/tasks', {
      headers: {
        "content-type": "application/json"
      }
    }
    )

    fetch(req)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTasks(data)
        // setFilteredBooks(data)
      })
      .catch(err => console.error(err))
  };



  const handleTaskComplete = (taskId,taskCompleted ) => {
    console.log ({"completed":!taskCompleted})
    const req = new Request(
      `http://localhost:3000/update/` + taskId, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
       body: JSON.stringify({"completed":!taskCompleted}),
      }
    )
    
    fetch(req)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      navigate(0)
      
    })
    .catch(err => console.error(err))
  }
  
  
  const handleTaskDelete = (taskId) => {
    const req = new Request(
      `http://localhost:3000/remove/` + taskId, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
    }
    )

    fetch(req)
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
      .catch(err => console.error(err))
  }
  
  return (
    <div className="container mx-auto p-4 bg-white-300 bg-opacity-70">
      {sessionStorage.getItem("username")}
      <h1 className="text-2xl font-bold mb-4">View Tasks</h1>
      <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete} />

      <Link to="/AddTask">
        <button type="button" className="w-full p-2 bg-white-500 text-white rounded">
          Add New Task
        </button>
      </Link>
    </div>
  );
}

export default ViewTasks;

