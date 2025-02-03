import express from 'express'

import { addFood,foodList ,removeFood} from '../controllers/foodController.js'
import multer from 'multer'
import fs from 'fs'
import path from 'path'

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/tmp');  // Store files in the temporary directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });





foodRouter.post("/add", upload.single('file'),addFood);
foodRouter.get('/list', foodList);
foodRouter.post('/remove', removeFood);

export default foodRouter
