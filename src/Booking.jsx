import { useState } from "react"
import axios from "axios"

function Booking(){

const [form,setForm]=useState({

name:"",
phone:"",
date:"",
persons:""

})

const handleChange=(e)=>{

setForm({...form,[e.target.name]:e.target.value})

}

const submit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/booking", form);
    alert(res.data.message);

    setForm({
      name:"",
      phone:"",
      date:"",
      persons:""
    });

  } catch (error) {
    console.log(error);
    alert("Server Error");
  }
};


/*const submit=async(e)=>{

e.preventDefault()

await axios.post("http://localhost:5000/booking",form)

alert("Booking Successful")

}*/

return(

<div className="booking">

<h2>Book Waterpark Tickets</h2>

<form onSubmit={submit}>

<input name="name" placeholder="Enter your Name" onChange={handleChange}/>
<input name="phone" placeholder="Enter your Phone" onChange={handleChange}/>
<input type="date" name="date" onChange={handleChange}/>
<input name="persons" placeholder="Persons" onChange={handleChange}/>
<button type="submit">Book Now</button>

</form>

</div>

)

}

export default Booking