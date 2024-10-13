// import React from 'react';
// // import TodoForm from '../components/TodoForm';
// import './Todo.css';

// function Todo() {
//     return (
//         <div>
//             <h3>Todo Form</h3>
//             <br/>
//             <br/>
//             <i class="fa-solid fa-star"></i>        

//         </div>
//     );
// }

// export default Todo;




// src/components/Todo.jsx
import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;



// import React from 'react';

// const Todo = () => {
//   return <h3>Todo List</h3>;
// };


// export default Todo;
