const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const ProfileDataModel=require('./models/ProfileData')


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/registration');

app.post('/register', (req, res)=>{

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(userinfo => res.json(userinfo))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Invalid Login");
            }
        }
        else{
            res.json("No records found! ");
        }
    })
})


app.post('/profile', (req, res)=>{
    
            ProfileDataModel.create(req.body)
            .then(profile => res.json(profile))
            .catch(err => res.json(err))
    
    })
    
app.get('/profile', async (req, res) => {
        try {
            const currentUsername = req.user.username; 
        
            const profileData = await profileDataModel.findOne({ user: { username: currentUsername } }).populate('user', 'username'); 
        
            if (!profileData) {
              return res.status(404).json({ message: 'Profile not found' });
            }
        
            res.json(profileData);
          } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
      });


app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});