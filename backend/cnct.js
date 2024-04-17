const mongoose=require('mongoose')
const port = process.env.PORT || 3000;
const connection=()=>{
  const uri = "mongodb+srv://mahesh_5402:mahesh_5402@cluster1.efcaahe.mongodb.net/"||3000;
mongoose.connect(uri, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

}
module.exports=connection;
