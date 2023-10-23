const express = require('express');
const userRouter = require('./routes/users.route');
const app = express();

app.use('/api/user/', userRouter);

app.use('/register', (req, res) => {
  res.status(200).json({
    message: 'Registration successful',
    statusCode: 200,
  });
});

app.get('/', (req, res) => {
  //query bolete url e ?id = 101 die key value  pair akare ja likha hy
  //more than one pathaite hole & use korbo
  // const id = req.query.id;
  // const name = req.query.name;
  const { id, name } = req.query;
  res.send(`<h1>${id}</h1>: ${name}`);
});
module.exports = app;
