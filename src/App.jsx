import { BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact"


const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={AboutMe} path='/about'/>
        <Route Component={Contact} path='/contact'/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
