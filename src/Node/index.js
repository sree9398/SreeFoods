const express=require('express')
const app=express();
app.listen(4000).then(console.log('ok'))
app.get('/', (req,res)=>{
res.send("Sree")
})