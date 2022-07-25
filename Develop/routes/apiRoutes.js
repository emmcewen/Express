const router=require("express").Router()


router.get("/api/notes",(req,res)=>{
    const fs=require("fs")
    const db=require("../db/db.json")
    res.json("db")
})

//do post yourself

router.post("/api/notes",(req,res)=>{
    console.log(req.body)
    
    //use fs for persistent data and modify db.json
})

module.exports=router