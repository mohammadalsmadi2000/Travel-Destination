import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header title="Travel Destination" />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/city/:id' element={<TourDetails />} />
      </Routes>
    </>
  );
}

export default App;
