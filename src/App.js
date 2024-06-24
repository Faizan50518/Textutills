import './App.css';
//import About from './Componets/About';
import Alert from './Componets/Alert';
import Navbar from './Componets/Navbar';
import Textform from './Componets/Textform';
import React, {useState} from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";*/


function App() {

  const [mode,setmode] = useState('dark');
  const [alert,setalert] = useState(null);

  const showalert = (message,type) => {
    setalert(
      {
        msg : message,
        type : type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const togglemode = () =>{
    if(mode==='light')
      {
        setmode('dark')
        document.body.style.backgroundColor = '#042743';
        showalert("the dark mode is Enable","success");
      }
      else
      {
        setmode('light')
        document.body.style.backgroundColor = 'white';
        showalert("the light mode is Enable","success");
      }

  }

  return (
   <>
   {/*<Router>
   <Navbar title="my-app" tab1="home" aboutText="About" mode={mode} togglemode={togglemode} />
   <Alert alert={alert}/>
   <div className="container">
   <Routes>
      <Route exact path="/about" element={<About  />} />
      <Route exact path="/" element={<Textform showalert={showalert} hading="Enter text to analyze" mode={mode} />} />
    </Routes>
    </div>
    </Router>*/}
    <Navbar title="my-app" tab1="home" aboutText="About" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container">
    <Textform showalert={showalert} hading="Enter text to analyze" mode={mode} />
    </div>
   </>
  );
}

export default App;
