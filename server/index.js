const express = require('express')
const db = require('./models/Posts.js')

const app = express()



db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log('Server is running on port 4000')
    })
})




