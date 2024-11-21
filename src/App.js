
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';
import React, {useState} from 'react'



function App() {
  const [mode,setMode]= useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      // document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      // document.body.style.color='black';
    }
  }
  return (
   <>
  
<Navbar title="Cinped" aboutText="About Cinped" mode={mode} toggleMode={toggleMode}/>
{/* <Navbar /> */}

<div className="container my-3">
  {/* <About/> */}
<Textform heading="Enter text to Anlayze" mode={mode}/>
</div>
</>
  );
}

export default App;
