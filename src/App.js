import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Header/HomePage.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
