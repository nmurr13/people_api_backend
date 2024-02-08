require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const PeopleRouter = require('./controllers/people') //new

const app = express();

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //this middle ware allows us to send JSON request with our request

//routes
app.use('/people', PeopleRouter);

app.get('/', (req, res) => {
    res.send('hello world')
})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening to port ${PORT}`))