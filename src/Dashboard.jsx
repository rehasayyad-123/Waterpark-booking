import {useEffect,useState} from "react"
import axios from "axios"

function Dashboard(){

const [data,setData]=useState([])

useEffect(()=>{

axios.get("http://localhost:5000/bookings")

.then(res=>{

setData(res.data)

})

},[])

return(

<div className="dashboard">

<h2>All Bookings</h2>

<table border={1}>
<tr>
<th>Name</th>
<th>Phone</th>
<th>Date</th>
<th>Persons</th>
</tr>

{data.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>
<td>{item.phone}</td>
<td>{item.date}</td>
<td>{item.persons}</td>

</tr>

))}

</table>

</div>

)

}

export default Dashboard