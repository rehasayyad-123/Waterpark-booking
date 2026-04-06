import React, { useState } from "react";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin=(e)=>{
e.preventDefault();
alert("Login Successful 🌊");
}

const styles = {

page:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
fontFamily:"Arial",
backgroundSize:"cover",
backgroundPosition:"center"
},

loginBox:{
width:"350px",
padding:"40px",
borderRadius:"15px",
background:"rgba(255,255,255,0.2)",
backdropFilter:"blur(10px)",
textAlign:"center",
color:"white",
boxShadow:"0 0 20px rgba(0,0,0,0.5)",
animation:"fadeIn 1.5s"
},

title:{
fontSize:"28px",
marginBottom:"20px"
},

input:{
width:"100%",
padding:"12px",
margin:"10px 0",
borderRadius:"8px",
border:"none",
outline:"none"
},

button:{
width:"100%",
padding:"12px",
marginTop:"10px",
border:"none",
borderRadius:"8px",
background:"linear-gradient(to right,#00c6ff,#0072ff)",
color:"white",
fontSize:"18px",
cursor:"pointer",
transition:"0.3s"
}

}

return(

<div style={styles.page}>

<div style={styles.loginBox}>

<h2 style={styles.title}>🌊 WaterPark Login</h2>

<form onSubmit={handleLogin}>

<input
style={styles.input}
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
style={styles.input}
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button style={styles.button}>
Login
</button>

</form>

<p style={{marginTop:"15px"}}>Enjoy Your Water Adventure 🎢</p>

</div>

</div>

)

}

export default Login