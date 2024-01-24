import express from 'express';
import router from './router.js';
import dotenv from 'dotenv';
import { connection } from '../database/db.js';

const app = express();

dotenv.config();

const port = process.env.PORT_SERVER;

app.use(router);

app.use(express.json());

app.listen(port,()=>{
    console.log('Server listen in port '+ port)
    connection();

})

