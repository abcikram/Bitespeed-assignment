import express from "express";
import Colors from 'colors';
import mongoose from 'mongoose'
import Router from './src/router/router.js'
import dotenv from 'dotenv'


const app = express();

dotenv.config()

app.use(express.json());


//global middleware :-
app.get('/',(req,res) =>{
    res.send("hello")
})


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log(`Database Connected`.bgBlue.underline))
    .catch((error) => console.log(error.message));

app.use('/',Router)



const PORT =  process.env.PORT;

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`.yellow.bold)
})

