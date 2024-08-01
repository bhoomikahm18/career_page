import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Header/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
