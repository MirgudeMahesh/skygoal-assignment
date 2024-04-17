const express = require('express');
const mongoose = require('mongoose');
const connection=require('./cnct')
const app = express();
const MaheshModel=require('./models/Credentials')
const cors=require('cors')
connection()
app.get('/',(req,res)=>{
    res.send('hello')
})
app.use(cors());
app.use(express.json())

connection();

app.get("/getData", async(req,res)=>{
  try {
    const data = await MaheshModel.find();
     res.send(data)
    }

   catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }

})





app.post('/putData', async (req, res) => {
  const dataToInsert = req.body;
  const xx=await MaheshModel.findOne({"mail":dataToInsert.mail})
 
  if (xx) {
    // If the entry already exists, send an appropriate response
    return res.status(400).send("Entry already exists");
  }
  
else{
  try {
    
 
    const newRecord = new MaheshModel(dataToInsert);

    await newRecord.save();

    res.status(201).send("success");
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  
}
});

const port=8000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
