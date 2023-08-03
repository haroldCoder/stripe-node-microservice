import express from 'express';
import { PORT } from './configs/credentials';
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.set('json escape', true);

app.use("/api", require("./routes/stripe.route"))

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    
})