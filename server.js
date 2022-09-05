const express =require("express");
const fs =require('fs');
const path =require ('path');


const app = express();
app.use(express.static(paht.join (__dirnmae,'public')));

app.use('/api/notes',require ('./routes/apiRoutes'));

app.use('/' , require ('./routes/htmlRoutes'));

const PORT= process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log("app is listening on PORT http://localhost:"+PORT)
});