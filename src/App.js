import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors apppointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dentist apppointment',
        day: 'Feb 15th at 3:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Vets apppointment',
        day: 'Feb 25th at 4:30 pm',
        reminder: false,
    },
])

// Add Task
const addTask = (task) => {
  // console.log(task);
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
}

// Delete task
const deleteTask = (id) => {
  // console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id));
}

// Toggle Reminder
const toggleReminder = (id) => {
  console.log('toggle');
  setTasks(tasks.map((task) => task.id === id ?
  {...task, reminder: !task.reminder} : task))
}


  const name = 'Jose';
  const isEnabled = true;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>My name is {name}</h2>
      <h2>Enabled: {isEnabled ? 'Yes' : 'No'}</h2>
      <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ?
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} /> :
        'No tasks'
      }
    </div>
  );
}



export default App;
