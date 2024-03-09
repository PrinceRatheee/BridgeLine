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
import Deposit from './components/Deposit';
import Success from './components/Success';
import Failure from './components/Failure';
import Widthdraw from './components/Widthdraw';




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
          <Route exact path="/transfermoney" element={<Deposit/>}/>
          <Route exact path="/widthdrawmoney" element={<Widthdraw/>}/>
          <Route exact path="/success" element={<Success/>}/>
          <Route exact path="/failure" element={<Failure/>}/>
        </Routes>
     
    </>
  );
}

export default App;
