const express = require('express');
const userRouter = require('./routes/users.route');
const app = express();

app.use('/api/user/', userRouter);

app.use('/register', (req, res) => {
  // res.status(200).json({
  //   message: 'Registration successful',
  //   statusCode: 200,
  // });
  res.statusCode = 201;
  res.append('success', 'Registration successful');
  // res.send('Registration ');
  res.cookie('user', 'shohag hossain');

  res.sendFile(__dirname + '/views/index.html');
});

// app.use((req, res) => {
//   res.send('404! Invalid Request');
// });

app.use('/', (req, res) => {
  res.clearCookie('user');
  console.log('clearCookie');
  res.send('Welcome to express server!');
});
module.exports = app;
