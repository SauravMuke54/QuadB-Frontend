import Home from "./Components/Home/Home";
import MovieDisplay from "./Components/MovieDisplay/MovieDisplay";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
function App() {
  return (
   <div className="home">
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route  path="/movies" element={<MovieDisplay/>}/>
    </Routes>
    </Router>
   
 
   </div>
  );
}

export default App;
