import { Link } from "react-router-dom"

function Navbar(){

return(

<div className="navbar">

<h2>🌊सयाजीराजे वॉटर पार्क, अकलूज🌊</h2>

<div>

<Link to="/">Home</Link>

<Link to="/booking">Booking</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/Login">Login</Link>

</div>

</div>

)

}

export default Navbar