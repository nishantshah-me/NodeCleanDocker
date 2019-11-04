let express = require('express')
let createError = require('http-errors');
let path = require('path');
const dotenv = require('dotenv');

const config = require('./db');
const logger = require('./presentation/util/logger');



var indexRouter = require('./presentation/routes/index');
var usersRouter = require('./presentation/routes/users');

const app = express()
dotenv.config();

// view engine setup
app.set('views', path.join(__dirname, './presentation/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, './presentation/public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/heartbeat',(req,res) => res.send("Everything is working fine!"));
app.get('/log',(req,res) => res.sendFile(path.join(__dirname, 'app.log')));
app.get('/db_log',(req,res) => res.sendFile(path.join(__dirname, 'database.log')));



//Database
const s = process.env.MONGO_URL;
logger.dblog().info('Database called')


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  logger.log().fatal(err.message);
  res.render('error');
});

app.listen(process.env.PORT,()=>{
  console.log("REST API Server running "+ process.env.PORT);
})
