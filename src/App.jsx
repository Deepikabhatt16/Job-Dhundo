import React from 'react';
import Home from './Components/Home';
import Signup from './Components/SignupLogin';
import LostPassword from './Components/LostPassword';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Footer from './Components/Footer';
import Job from'./Components/Job';
import Notifications from'./Components/Notifications';

import { Route, Routes } from 'react-router-dom';
import Job_Post from './Components/JobPost';
import Blogs from './Components/blogs';
import BlogDetail from './Components/BlogDetail';
 
const  App=()=>{
  return (
<div>
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Blog-Post" element={<Blogs />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/login" element={<Signup/>} />
        <Route path="/Company" element={<Job_Post/>}/>
        <Route path="/Notifications" element={<Notifications/>}/>
        <Route path="/lost-password" element={<LostPassword />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer/>
</div>
  );
};

export default App;
