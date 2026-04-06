/*
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

let bookings = []

app.post("/booking",(req,res)=>{

bookings.push(req.body)

res.json({message:"Booking Successful"})

})

app.get("/bookings",(req,res)=>{

res.json(bookings)

})

app.listen(5000,()=>{

console.log("Server running on port 5000")

})*/









import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

let bookings = []

// POST booking
app.post("/booking", (req,res)=>{
  bookings.push(req.body)
  res.json({message:"Booking saved"})
})

// GET all bookings (Dashboard ke liye)
app.get("/bookings",(req,res)=>{
  res.json(bookings)
})

app.listen(5000,()=>{
  console.log("Server running on port 5000")
})