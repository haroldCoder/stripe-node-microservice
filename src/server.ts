import express from 'express';
import { PORT } from './configs/credentials';
const app = express();

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    
})