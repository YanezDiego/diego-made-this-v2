import { BrowserRouter, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";



const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={AboutMe} path='/aboutme' />
        
      </Routes>
      <footer className="text-center p-8 text-sm " >© DiegoMadeThis With ♥.</footer>
    </BrowserRouter>
  );
}

export default App
