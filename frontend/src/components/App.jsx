import Home from './Home';
import Login from './Login';
import Register from './Register';
import Profile from './regprofile';
import Data from './data';
import About from './about'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div >
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Login/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/about" element ={<About/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/data" element={<Data/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
