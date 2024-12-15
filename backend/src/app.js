import express from 'express';
import "dotenv/config";
import cors from "cors";

// FILES HANDLING
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from 'url';

import router from './router/index.routes.js';

// const __filename = fileURLToPath(import.meta.url);

const app = express();

import mongoose from "mongoose";

mongoose.connect(process.env.URL_MONGO)
.then(() => console.log('DB Connection successful'))
.catch((err) => console.error(err));

app
    .use(express.static("public"))
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(cors())
    // .use('/img/posts', express.static(path.dirname(__filename + '/img/posts')));


app.use(router);

app.listen(process.env.PORT, () => console.log(`Listening at http://${process.env.HOST}:${process.env.PORT}`))