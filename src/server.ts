import express from 'express';
import { PORT } from './configs/credentials';
const app = express();

app.use("/api", require("./routes/stripe.route"))

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    
})