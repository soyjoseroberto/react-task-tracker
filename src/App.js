import './App.css';
import Header from './components/Header';

function App() {
  const name = 'Jose';
  const isEnabled = true;
  return (
    <div className="container">
      <h1>Hello From React</h1>
      <h2>My name is {name}</h2>
      <h2>Enabled: {isEnabled ? 'Yes' : 'No'}</h2>
      <Header />
    </div>
  );
}

export default App;
