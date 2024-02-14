const express = require(`express`);
const app = express();
const connection = require(`./config/db`);
const router = require('./routes');

const port = 1234;

app.use(express.json());
app.use(`/api`, router);

app.get(`/api/reset`, (req, res) => {
    connection
    .sync({
        force:true,
    })
    .then(() => {
        res.status(201).send("Database reset!");
    })
    .catch((error) => {
        res.status(500).send("Database failed to reset!");
        console.log(error);
    })
})

app.listen(port, ()=> {
    console.log(`The server is running on port ${port}`);
})