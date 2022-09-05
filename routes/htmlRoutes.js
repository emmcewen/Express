const router= require ('express')
const router = express.Router();
const fs = require('fs');
const path=require('path');

const getPath =(name)=> path.join(__dirname, '..', 'public', `${name}.html`);

router.get('/notes',(req,res)=>{
    res.sendFile(path.getPathjoin(__dirname,"notes"));
});

router.get('*',(req,res)=>{
    res.sendFile(getPath.join(__dirname,"index"));
});

module.exports=router;