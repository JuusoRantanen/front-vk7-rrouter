import './App.css';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import NotFound from './NotFound.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
  


function App() {
 
  return (
   

    <div className="App">
      <header>
        <h1>Welcome to my page</h1>
      </header>
       <BrowserRouter>
    <Link to="/">Home</Link>{' '}
    <Link to="/about">About</Link>{' '}
    <Link to="/contact">Contact</Link>{' '}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
