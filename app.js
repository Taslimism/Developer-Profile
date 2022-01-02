const express = require('express');
const bodyParser = require('body-parser');

const getAllDev = require('./routes/get-all-developers');


const port = process.env.PORT || 7000;
const app = express();

app.use(express.static('static'));
app.use((req, res, next) => {
    res.sendFile(path.resolve('static', 'index.html'));
})



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/developers', getAllDev);
app.use('/api/developers', getAllDev);



app.use('/api/developers', (err, req, res, next) => {
    res.status(400).json({ error: "Invalid user name" });
})




app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

