import React from "react";

function Home() {

const styles = {

page:{
fontFamily:"Arial",
//background:"linear-gradient(to right,#00c6ff,#0072ff)",
background:"light gray",
color:"black",
textAlign:"center"
},

hero:{
height:"80vh",
//backgroundImage:
//"url('https://lh3.googleusercontent.com/p/AF1QipM4vQkJ0Q5q2x8fS7pTn6Y9E1N1uS6VYJQb7Xw=s1360')",
backgroundSize:"cover",
backgroundPosition:"center",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center"
},

heroTitle:{
fontSize:"60px",
/*background:"rgba(0,0,0,0.5)",*/
background: "light white",
padding:"20px",
borderRadius:"10px"
},

sectionTitle:{
fontSize:"40px",
marginTop:"40px"
},

gallery:{
display:"flex",
justifyContent:"center",
flexWrap:"wrap",
gap:"20px",
padding:"20px"
},

image:{
width:"350px",
height:"230px",
objectFit:"cover",
borderRadius:"10px",
boxShadow:"0 0 10px black"
},

rides:{
display:"flex",
justifyContent:"center",
flexWrap:"wrap",
gap:"20px",
marginTop:"20px"
},

card:{
background:"white",
color:"black",
padding:"20px",
width:"200px",
borderRadius:"10px",
fontSize:"20px",
fontWeight:"bold",
boxShadow:"0 0 10px black"
},

prices:{
display:"flex",
justifyContent:"center",
gap:"30px",
marginTop:"20px",
flexWrap:"wrap"
},

priceCard:{
background:"#ff9800",
padding:"30px",
borderRadius:"10px",
width:"200px",
fontSize:"20px",
boxShadow:"0 0 10px black"
},

footer:{
marginTop:"50px",
padding:"20px",
background:"#00000055"
}

}

return(

<div style={styles.page}>

{/* HERO SECTION */}

<div style={styles.hero}>

<h1 style={styles.heroTitle}>
Sayajiraje Water Park🌊
</h1>

<p>Enjoy Amazing Water Rides With Family & Friends</p>
<p>🌊 अकलूजमधील प्रसिद्ध सयाजीराजे वॉटर पार्कमध्ये आपले स्वागत आहे
 <br/>
🎢 कुटुंबासोबत पाण्यातील मजेदार राईड्सचा आनंद घ्या</p>
</div>

{/* IMAGE GALLERY */}

<h2 style={styles.sectionTitle}>Water Park Gallery</h2>

<div style={styles.gallery}>

<img style={styles.image}
src="https://lh3.googleusercontent.com/p/AF1QipPhcaN1BAgDijlTZkz9XiovS3EXuZB0CietA5ek=s680-w680-h510-rw" />

<img style={styles.image}
src="https://www.sayajirajepark.com/sayajirajepark/images/sayajirajepark_amusementpark.jpg" />

<img style={styles.image}
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMXPXsRVBhYqiBd8RKXM68PMAWQJDpkWYBA&s"/>
<img style={styles.image}
src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepYaLeRCWYfwE9QKI75eGZfJrmRwAP8vJSIyzdb7JqV9FWZvFJvGncDpSVXc5PalUi4w5QJgBKG73hcJ2P77YUcixMtz0M8m1LwMrauoP2m5g9OnvHcwqy8i56RHWThuT2ykSPi=s680-w680-h510-rw" />

<img style={styles.image}
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkr5XDIU-lFXWgN_-D8BeC7xRgMMh-onNoiA&s" />

<img style={styles.image}
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAo1za841-kmEyZdbZgkRXlwOGrRCHwxrdIA&s" />

<img style={styles.image}
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7I4O5IyTuLWj9T4ALp7-v5xfqcFDC5ko7g&s" />

<img style={styles.image}
src="https://www.sayajirajepark.com/sayajirajepark/images/sayajirajepark_amusementpark.jpg" />

<img style={styles.image}
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7bce9aMuV_bJLKcT816UprRXcECoOnztufA&s" />

</div>

{/* RIDES */}

<h2 style={styles.sectionTitle}>🎢 Water Rides</h2>

<div style={styles.rides}>

<div style={styles.card}>Wave Pool</div>

<div style={styles.card}>Water Slides</div>

<div style={styles.card}>Rain Dance</div>

<div style={styles.card}>Kids Pool</div>

<div style={styles.card}>Lazy River</div>

</div>

{/* PRICES */}

<h2 style={styles.sectionTitle}>💰 Ticket Prices</h2>

<div style={styles.prices}>

<div style={styles.priceCard}>
<h3>Adult</h3>
<p>₹500</p>
</div>

<div style={styles.priceCard}>
<h3>Kids</h3>
<p>₹300</p>
</div>

<div style={styles.priceCard}>
<h3>Family Pack</h3>
<p>₹1200</p>
</div>

</div>

{/* FOOTER */}

<div style={styles.footer}>

<h3>📍 Location</h3>

<p>Akluj, Maharashtra</p>

<p>Sayajiraje Water Park</p>

</div>

</div>

)

}

export default Home