import React from "react"
import Data from "./components/Form.js"
import{
  BrowserRouter as Router,Routes,Route
} from "react-router-dom";
import Home from "./components/Home.js";
import Show from "./components/Show.js";
function App()
{
return(
  <Router>
    <>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/Form">form</a>
      </li>
      <li>
        <a href="/Show">show</a>
      </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Form" element={<Data/>}></Route>
        <Route exact path="/Show" element={<Show/>}></Route>
      </Routes>
    </>
  </Router>
)
}
export default App;
