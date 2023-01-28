const express =require("express");
const homeSchema = require("../models/homeSchema");
const Router = express.Router();
const userSchema = require('../models/homeSchema');

Router.get('/',(err,res) => {
    res.render('register',{title:"Fill Form"})
})

Router.post('/register',async(req,res) =>{
    try{
       const productname= req.body.productname;
       const countryname= req.body.countryname;
       const distance= req.body.distance;
       const costing= req.body.costing;
      
        {
        const userData = new homeSchema({
            productname,
            countryname,
            distance,
            costing,
        })
        userData.save(err=>{
            if(err){
                console.log(err);
            }else{
                res.render("register",{title:"Done"})
            }
        })

        // const useremail = await homeSchema.findOne({email:email});
        // if(email === useremail.email){
        //     res.render('register', { title:'',password:'',email:'Email is already register' })
        // }else{
        //     console.log('err');
        // }
        }

    }catch(error){
        res.render('register',{title:'something is not field', countryname:'',distance:''})
    }
})

module.exports =Router;