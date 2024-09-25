const express = require('express');
const db = require('./models/Posts'); 
const cors = require('cors')
const app = express();

const postRouter = require('./routes/Posts.js');

app.use(cors())
app.use(express.json());

app.use('/posts', postRouter); 


db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log('Server is running on port 4000'); 
    });
});