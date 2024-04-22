const express= require('express')
const router= express.Router()

//define home page route
router.get('/', (req,res) =>{
    res.render('dogshomp',{txt:"page des cleps"})
})
//define /about route
router.get('/about',(req,res)=>{
res.render('dogsabout',{txt:"about les toutous"})
})

router.get('/formulaire',(req,res)=>{
    res.render('dogform',{txt:"formulaires de iench"})
})

router.post('/record',(req,res)=>{
console.log(req.body)
})

console.log("test github");
//module export
module.exports=router

//npm install express --save    pour installer les modules (package.json...)