const express =require("express")
const htmlRoute=require("../routes/htmlRoutes")
const PORT= process.env.PORT || 3001

const app = express()
app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(PORT,()=>{
    console.log("app is listening on PORT http://localhost:"+PORT)
})