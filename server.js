const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schemas/user');
const authRouter = require('./routes/authRoutes');
const stripeRouter = require('./routes/stripeRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRoutes');
const {sendError} = require('./utils/ErrorHandler.js');
const cookieParser = require('cookie-parser');
const path = require('path');
const chatRouter = require('./routes/chatRouter');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

const DB = process.env.DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to server...")
})


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/stripe', stripeRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/chatRoom', chatRouter);

app.use((err, req, res, next) =>{
    sendError(err, res)
})

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('frontend/build'))

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server is running from ${port}`));
