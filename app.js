import express from "express";
const app = express();
import 'dotenv/config.js';
import bookRouters from "./routes/BookRoute.js";
import studentRouters from "./routes/StudentRoute.js";



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
app.use('/student', studentRouters);
