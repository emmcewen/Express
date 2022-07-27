const router=require("express").Router()


router.get("/api/notes",(req,res)=>{
    const fs=require("fs")
    const db=require("../db/db.json");
    res.json(db)
})


router.post("/api/notes", (req,res) => {
   fs.readFile("../db/db.json", "utf8", (err,data)=>{
       if (err) throw err;
       var notes =JSON.parse(data);
       let userNote =req.body;
       userNote.id = Math.floor(Math.random()*5000);
       notes.push(userNote);
       fs.writeFile("../db/db.json",JSON.stringify(notes),(err,data) => {
           res.json(userNote);
           console.log(req.body);
    
   });

});
    
    
/*router.delete("/api/notes:id", (req,res) => {
    fs.readFile("../db/db.json", "utf8", (err,data)=>{
      if (err) throw err;
       let notes =JSON.parse(data);
        const newNotes=notes.filter(note=> note.id !==parseInt(req.params.id));

        fs.writeFile(("../db/db.json",JSON.stringify(newNotes),(err,data) => {
            res.json({message:"success"});

        }    
));*/  

})


module.exports=router
