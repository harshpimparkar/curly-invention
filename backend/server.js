import express from "express";
import  dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()
//to parse incoming requests with json 
app.use(express.json())
app.use("/api/auth", authRoutes)


// app.get("/",(req,res)=>{res.send("Wundurbar!")})

app.use("/api/auth", authRoutes)

app.listen(PORT,()=>{
    console.log('Connected to MongoDB.') 
    console.log(`Server Running on port: ${PORT}`)
})
