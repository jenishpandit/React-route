import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Page404 from './component/Page404';
import User from './User';
import Filter from './component/Filter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact/>}/>
         <Route path='/User/:name' element={<User/>}/>
         <Route path='/Filter' element={<Filter/>}/>
         <Route path='/*' element={<Page404/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
