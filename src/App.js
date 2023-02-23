import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home-page/Home';
import About from './components/about-page/About';
import Expirence from './components/expirence-page/Expirence';
import Proj from './components/projects-page/Proj';
import Contact from './components/contact-page/Contact';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='expirence' element={<Expirence/>}/>
      <Route path='projects' element={<Proj/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}



export default App;
