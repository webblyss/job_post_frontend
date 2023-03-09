import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './Home';
import Application from './pages/Application';
import PostJobs from './pages/PostJobs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = '/apply' element = {<Application/>} />
        <Route path = '/postJob' element = {<PostJobs/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
