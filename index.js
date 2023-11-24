const express = require ("express");
const bodyParser = require ("body-parser");


const itemRoutes = require ("./routes/items.js");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/items.js",itemRoutes);
app.listen (port , ( ) =>{
    console.log(`server starts at port http://localhost:${port}`);
});