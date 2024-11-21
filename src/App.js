
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import Textform from './componants/Textform';

function App() {
  return (
   <>
  
<Navbar title="Cinped" aboutText="About Cinped"/>
{/* <Navbar /> */}

<div className="container my-3">
  {/* <About/> */}
<Textform heading="Enter text to Anlayze"/>
</div>
</>
  );
}

export default App;
