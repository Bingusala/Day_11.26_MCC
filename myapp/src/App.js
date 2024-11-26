import './App.css';
import {BrowserRouter as Router,Routes,Route,Link,NavLink} from 'react-router-dom';
import Contactus from './componets/ContactUs';
import AboutUs from './componets/AboutUs';
import Home from './componets/Home';
import Login from './componets/Login';
import Dashboard from './componets/Dashboard';

function App() {
  return(
    <div className="App">
      <Router>
        <nav>
           <ul>

            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
           
          </ul> 
        </nav>
        <Routes>
          
             <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/contact' element={<Contactus/>}/> 
            <Route path='/' element={<Login/>}/>
            <Route path='/dash' element={<Dashboard/>}/>
         
        </Routes>
      </Router>


    </div>
  );
}

export default App;
