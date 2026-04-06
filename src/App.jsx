import { BrowserRouter,Routes,Route } from "react-router-dom"

import Home from "./Home"
import Booking from "./Booking"
import Dashboard from "./Dashboard"
import Navbar from "./Navbar"
import Login from "./Login"
import "./App.css"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/booking" element={<Booking/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/Login" element={<Login/>}/>

</Routes>

</BrowserRouter>

)

}

export default App