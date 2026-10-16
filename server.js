const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { ConnectDb } = require('./App/Config/Conneaction');
const { WebRoutes } = require('./App/Routes/WebRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', WebRoutes);


app.get('/', (req, res) =>{
    res.send('API Start..')
})


let PORT = process.env.PORT || 5000;

let SycnServer = async () =>{

    await ConnectDb()

    app.listen(PORT, () =>{
        console.log(`Server Start with http://localhost:${PORT}`)
    })

}

SycnServer();
