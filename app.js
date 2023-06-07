import express from 'express';

const app = express();
const port = 3000


app.get("/",(req,res)=>{
    res.send('Server is working.')
})

app.listen(port,function(){
    console.log("Server is listening on port %d", port)
})