import { Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Components/About';
import { Home } from './Components/Home';
import  Navbar  from './Components/Navbar';
import  {Footer}  from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path={'about'} element={<About/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
