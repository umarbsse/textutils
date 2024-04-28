import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#03105a';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Textutills - Darkmode';
      /*setInterval(() => {
        document.title = 'Textutills - Buy me';
      }, 2000);
      setInterval(() => {
        document.title = 'Install Textutills please';
      }, 1500);*/
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title = 'Textutills - Lightmode';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutTitle="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode} />
      {/*<About/>*/}
      </div>
    </>


  );
}

export default App;
