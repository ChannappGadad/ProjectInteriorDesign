import './App.css';
import {BrowserRouter, BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Pages from './Pages/Pages';
import Services from './Services/Services';
import Project from './Project/Project';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="App">
        <header>
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Pages/Pages' element={<Pages/>} />
              <Route path='Services/Services' element={<Services />}/>
              <Route path='Project/Project' element={<Project/>} />
              <Route path='Blog/Blog' element={<Blog/>}/>
              <Route path='Contact/Contact' element={<Contact/>} />
            </Routes>
          </BrowserRouter>
        </header>


        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
