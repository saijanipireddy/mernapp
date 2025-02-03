import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import { addFood } from './controllers/foodController.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'

//app config 

const app = express()
const port = process.env.PORT || 4000

// middleware 


app.use(cors(
    {
        origin: ["https://deploy-mern-1whq.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

// DB Connection 
connectDB();




//api endpoints 

app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);


app.listen(port, () => {
    console.log('Sever Running on http://localhost:4000');
})

