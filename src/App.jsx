import { BrowserRouter, Route, Routes} from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./components/Home"

const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route Component={Home} path='/' exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App
