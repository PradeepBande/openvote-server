require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload')
const mongoose = require('mongoose');
const checkAuth = require('./utils/checkAuth')

// bring routes
const adminRoutes = require('./routes/admins')
const citiesRoutes = require('./routes/cities')
const partyRoutes = require('./routes/parties')
const candidateRoutes = require('./routes/candidates')
const resolutionsRoutes = require('./routes/resolutions')
const constituencyRoutes = require('./routes/constituency')
const voteRoutes = require('./routes/votes')

const port = process.env.PORT || 4001;
const app = express();

app.use(cors({ origin: '*' }))
app.options('*', cors());

app.use(express.json())

app.use(fileupload()) // express file uplaod

mongoose.set('strictQuery', false);
// db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

// routes middleware

//public data serve
app.use('/api/admins', adminRoutes)
app.use('/api/cities', citiesRoutes)
app.use('/api/party', partyRoutes)
app.use('/api/candidates', candidateRoutes)
app.use('/api/resolutions', resolutionsRoutes)
app.use('/api/constituency', constituencyRoutes)
app.use('/api/votes', voteRoutes)

app.use('/api/images', express.static('images'))
app.use('/api/articles', express.static('uploads'))


app.get('/', (req, res) => {
    res.json({ message: "Openvote server is running" })
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
    console.log(`Server is running on port ${port}`);
});
