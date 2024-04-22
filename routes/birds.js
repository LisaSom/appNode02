const express= require('express')
const jsonfiles= require('jsonfile')
const router= express.Router()

const timeLog= (req,res,next)=>{
console.log('oiseau chargé à', (new Date()).toLocaleDateString("fr-FR"))
next()
}

router.use(timeLog)

//define home page route
router.get('/', (req,res) =>{
    res.render('birdshomp',{txt:"birds home page"})
})

router.get('/about',(req,res)=>{
    res.render('birdsabout',{txt:"about les piafs"})
})

router.get('/formulaire',(req,res)=>{
    res.render('birdsform',{txt:"formulaire de piafs"})
})

router.post('/record',(req,res)=>{
    console.log(req.body)
    jsonfiles.writeFile('models/birds.json',req.body)
             .then( () => res.send('bird recorded succesfully'))
             .catch( (err)=> res.send('error recording'))
})

console.log("hello world");
console.log("test");
//module export
module.exports=router
//------



