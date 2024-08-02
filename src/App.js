import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Header/HomePage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/User/Login.jsx';
import { useState } from 'react';
import JobList from './components/List/JobList.jsx';
import CompanyDetails from './components/CompanyDetails/CompanyDetails.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/jobList' element={<JobList />} />
        <Route path='/about' element={<CompanyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
