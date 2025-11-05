import express from "express";
const app = express();
import 'dotenv/config.js';
import bookRouters from "./routes/BookRoute.js";



//middleware
app.use(express.json());

try{
app.listen(process.env.PORT|| 3000,() => {
    console.log(`Listening port ${process.env.PORT||3000} `);
});
}catch(e){
    console.log(e);
}
app.use('/books', bookRouters);
app.get('/Isay', async(request,response)=>{
    response.status(200).json({message: "Hello there! I am Isay"})
});