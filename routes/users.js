// routes pour développer un formulaire de création users
//enregistrer l'objet users avec nom prenom etc que j'ai definit auparavent dans models/user.json
//2. développer un formulaire de connexion par mail et password

const express= require('express')
const jsonfiles= require('jsonfile')
const router= express.Router()

const timeLog= (req,res,next)=>{
    next()
    }


router.use(timeLog)

let USER = null

router.get('/', (req,res) =>{
    res.render('usersHome',{txt:"users home page"})
})

router.get('/inscription', (req,res) =>{
    res.render('inscriptionForm',{txt:"Formulaire d'inscription"})
})

router.get('/profil', (req,res) =>{
    res.render('profil',{ user:USER })
})


router.get('/connexion', (req,res) =>{
    res.render('connexionForm',{txt:"Connectez-Vous"})
})

router.post('/record',(req,res)=>{
    console.log(req.body)
    jsonfiles.writeFile('models/users.json',req.body)
             .then( () => res.send('user recorded succesfully'))
             .catch( (err)=> res.send('error recording'))
})

router.post('/connect',(req,res)=>{
    console.log(req.body)
    jsonfiles.readFile('models/users.json')
             .then( (data) => { 
                console.log(data) 
                if ( (data.email === req.body.email) && ( data.password === req.body.password   )  )   {
                    console.log("youpi")
                    USER = data
                    res.redirect('profil')
                }   else {
                    res.render("nonauth")
                }           
                
                })
             .catch( (err)=> res.send('error recording'))
})

module.exports=router