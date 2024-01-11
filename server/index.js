const express = require("express")
const mongoose = require ('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const multer = require("multer");
var cloudinary = require('cloudinary');
const path = require('path');
const router =express.Router()
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/employee");

          
cloudinary.config({ 
  cloud_name: 'dp7um9ig2', 
  api_key: '617864628548868', 
  api_secret: 'm19pviKIEUEMJnL0YFBPCOtvBIQ' 
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'), // cb -> callback
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });

  const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
  }).single("image");


app.post('/register',async(req,res)=>{
   
    handleMultipartData(req, res, async (err) => {
        if (err) {
          res.json({ msgs: err.message });
        }
    
        const filePath = req.file.path;
    
        if (!filePath) {
          return;
        }
    
        let cloud_FileLink;
        
        cloudinary.v2.uploader.upload(filePath, async (error, result) => {
          if (result.secure_url) {
            const Ndriver= new EmployeeModel({

                fname: req.body.fname,
                lname: req.body.lname,
                mobNo: req.body.mobNo,
                email: req.body.email,
                password: req.body.password,
                image: result.secure_url,
        
            })
        
        try{        
            const a1 =await Ndriver.save()
             res.json(a1)
        
        }catch(err){
            res.send('Error'+err)
        }
           
          } else {
            res.send(error.message);
          }
        });
      });
    });




app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                console.log(`${user.fname} & ${user.lname} & ${user.mobNo} & ${user.email}`)
               
                res.json(user)
             
            }
            else{
                res.json("The password is invalid")
            }
        } else{
            res.json("No Record found")
        }
    })
})

app.post('/signup',(req,res) =>{

    
    EmployeeModel.create (req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    

})

app.listen(3001, () =>{
    console.log("Server is Running")
})

app.get("/home",async(req,res)=>{
    const data = await EmployeeModel.find({})
        res.json({success:true,data:data})
    })
    