import './App.css';
import Application from './components/Application';
import Approach from './components/Approach';
import Backup_Manager from './components/Backup_Manager';
import Benefits from './components/Benefits';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Institute from './components/Institute';
import Login from './components/Login';
import Peer from './components/Peer';
import Quote from './components/Quote';
import {  Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';




function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<>
          
          <Hero/>
          <Quote/>
          {/* <Approach/> */}
          <Benefits/>
          <Application/>
          {/* <Backup_Manager/> */}
          <Faq/>
        
        </>}/>
        </Routes>
        <Routes>
          <Route exact path="/p2p" element={<Peer/>}/>
          <Route exact path="/ifb" element={<Institute/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
        </Routes>
     
    </>
  );
}

export default App;
