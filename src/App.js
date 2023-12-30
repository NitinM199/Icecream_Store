import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Post from './pages/Post';




function App() {
  return (
   <>
   <Router>
   <Navbar/>
  <Routes>
    <Route path='/Home' element = {<Home/>}/> 

    <Route path='/about' element = {<About/>}/> 

    <Route path='/shop' element = {<Shop/>}/>

    <Route path='/menu' element = {<Menu/>}/> 

    <Route path='/contact' element = {<Contact/>}/> 
     
    <Route path='/post' element = {<Post/>}/>   

  </Routes>
   <Footer/>
   </Router>
   </>
  );
}

export default App;
