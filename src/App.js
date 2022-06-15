import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import{
//   BrowserRouter,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // setInterval(() => {
  //   document.title = "Hello.."
  // }, 2000);
  // setInterval(() => {
  //   document.title = "Hi.."
  // }, 1500);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);  
    }, 1500);   
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = "Hello.."
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Hi.."
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
      // setInterval(() => {
      //   document.title = "Hello.."
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Hi.."
      // }, 1500);
    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
  <Navbar title = "TextUtils" aboutText = "About Us" mode={mode} toggleMode={toggleMode} />
  <Alert alert = {alert} />
  <div className="container my-4">
    {/* <Routes>
      <Route exact path="/about" element={<About />} />    
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analize below" mode={mode} />} />   
    </Routes>    */}
    <TextForm showAlert={showAlert} heading = "Enter the text to analize below" mode={mode} />
    {/* <About /> */}
  </div>
  {/* </BrowserRouter>     */}
  </>
  );
}

export default App;
