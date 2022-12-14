const express = require("express");
const mongoose = require("mongoose");
const RegisterjwtUser = require("./jwtmodel");
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");
const cors = require("cors");


const app = express();

mongoose.connect('mongodb+srv://Jwtmernauth501:welcome1@cluster0.17hwg.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log("DB connected..")
)

app.use(express.json());

app.use(cors({origin:'*'}))

// register and data post router
app.post("/register", async(req, res) =>{
    try{
        const { username,email,password,confirmpassword } = req.body;

        let exist = await RegisterjwtUser.findOne({email});

        if(exist){
            return res.status(400).send("User already exsit!");
        }

        if(password !== confirmpassword){
            return res.status(400).send("Password are not matching..")
        }
        let newUser = new RegisterjwtUser({
            username,
            email,
            password,
            confirmpassword
        })
        await newUser.save();
       res.status(200).send("Register successfully!")


    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error")
    }
})
// Login Router,

app.post('/login', async(req, res) =>{
    try{
        const{email,password} = req.body;
        let exist = await RegisterjwtUser.findOne({email});

        //
        if(!exist){
            return res.status(400).send("Usr Not Found")
        }
        //
        if(exist.password !== password){
            return res.status(400).send("Invalid Credential")
        }

        //
        let payload = {
            user:{
                id:exist.id
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token) =>{
                if(err) throw err;
                return res.json({token})
            }
        )

    }
    catch(err){
        console.log(err);
        return res.status(500).send("server error");
    }
})

// my profile router and protect router
app.get('/myprofile', middleware,async(req, res) =>{
    try{
        let exist = await RegisterjwtUser.findById(req.user.id);
        if(!exist){
            return res.status(400).send('user not found');
        }
        res.json(exist);

    }catch(err){
        console.log(err);
        return res.status(500).send('server error')
    }
})

//
app.get("/", (req, res) =>{
 res.send("<h2>Hello, welcome to JWT user!</h2>");
})


app.listen(5003)
console.log("server is runing 5003");