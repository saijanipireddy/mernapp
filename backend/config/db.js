import mongoose from 'mongoose'

export const connectDB = async () => {
     mongoose.connect("mongodb://localhost:27017/food-del")
    .then(()=> console.log('Db Connected Succesfully'))
    .catch((err) => console.log('Db Connection Error'));

}


