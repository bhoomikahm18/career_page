import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Header/HomePage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/User/Login.jsx';
import { useState } from 'react';
import JobList from './components/List/JobList.jsx';
import CompanyDetails from './components/CompanyDetails/CompanyDetails.jsx';
import JobApplyForm from './components/Job/JobApplyForm.jsx';
import ApplicationForm from './components/Job/ApplicationForm.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/register' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path='/jobList' element={<JobList />} />
        <Route path='/' element={<CompanyDetails />} />
        <Route path='/apply/:id' element={<JobApplyForm />} />
        <Route path='/apply' element={<ApplicationForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
