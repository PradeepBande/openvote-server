require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload')
const mongoose = require('mongoose');
const checkAuth = require('./utils/checkAuth')

// bring routes

const port = process.env.PORT || 4001;
const app = express();

app.use(cors({ origin: '*' }))
app.options('*', cors());

app.use(express.json())

app.use(fileupload()) // express file uplaod

// db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('DB connected'))
   .catch(err => console.log(err));


// routes middleware

//public data serve
app.use('/api/images', express.static('images'))
app.use('/api/articles', express.static('uploads'))


app.get('/', (req, res) => {
   res.json({ message: "Cfropsy server is running" })
})

//Invalid route handling
app.use((req, res, next) => {
   const error = new Error('Not Found')
   error.status = 404
   next(error)
})

app.use((error, req, res, next) => {
   res.status(error.status || 404)
   res.json({
      error: error.message
   })
})

// Server start
app.listen(port, () => {
   const sha256 = require('sha256');
   console.log("Password--", sha256('Pradeep'))
   console.log(`Server is running on port ${port}`);
});
