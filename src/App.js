import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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


  const name = 'Jose';
  const isEnabled = true;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>My name is {name}</h2>
      <h2>Enabled: {isEnabled ? 'Yes' : 'No'}</h2>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}



export default App;
