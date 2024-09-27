const express = require('express');
const db = require('./models/Posts'); 
const cors = require('cors')
const app = express();
const {Comments} = require('./models/Comments.js')
const {Posts} = require('./models/Posts.js')
const postRouter = require('./routes/Posts.js');
const commentRouter = require('./routes/Comments.js')
const userRouter = require('./routes/Users.js')
const {Users} = require('./models/Users.js')
app.use(cors())
app.use(express.json());

app.use('/posts', postRouter); 
app.use('/comments', commentRouter); 
app.use('/auth',userRouter)

Users.hasMany(Posts, {
  foreignKey: 'userId',
  onDelete:'CASCADE'
})

Posts.belongsTo(Users,{
  foreignKey: 'userId'
})

Posts.hasMany(Comments, {
    foreignKey: 'postId',   
    onDelete: 'CASCADE'    
  });
  
  Comments.belongsTo(Posts, {
    foreignKey: 'postId'   
  });

db.sequelize.sync().then(() => {
    app.listen(4000, () => {
        console.log('Server is running on port 4000'); 
    });
});