import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';

function S({name}){
  return(<p>smadi {name}</p>)
}

function App() {
  return (
    <Home/>
  );
}

export default App;
