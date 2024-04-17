const mongoose = require("mongoose");

const exSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true},
    
mail: {
    type: String,
    required: true, // Email is a required field
    unique: true // Ensure email is unique
},
password: {
    type: String,
    required: true // Password is a required field
}
}, { collection: 'shivam' });

const MaheshModel = mongoose.model("Example", exSchema);
module.exports = MaheshModel;