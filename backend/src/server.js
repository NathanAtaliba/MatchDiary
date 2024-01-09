import express from 'express';
import router from './router.js'
const app = express();

const port = 3000;

app.use(router);

app.use(express())

app.listen(port,()=>{
    console.log('Server listen in port '+ port)
})

