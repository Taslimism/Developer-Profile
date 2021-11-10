const express = require('express');
const bodyParser = require('body-parser');

const getAllDev = require('./routes/get-all-developers');


const port = process.env.PORT || 7000;
const app = express();

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

app.use('/api/developers', getAllDev);
app.use('/api/developers', getAllDev);



app.use('/api/developers', (err, req, res, next) => {
    res.status(400).json({ error: "Invalid user name" });
})




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

