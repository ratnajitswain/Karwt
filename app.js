const express = require('express');
const path    = require('path');
const cors    = require('cors');
const csrf    = require('csurf');
const session = require('express-session');
const logger  = require('morgan');
const ejs     = require('ejs');
const flash   = require('express-flash');

const createError  = require('http-errors');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const compression  = require('compression');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'starlord#6',
  name: 'session',
  saveUninitialized: true,
  proxy: true,
  resave: false,
  sameSite: 'lax',
  saveUninitialized: true,
  cookie:{
    httpOnly: true,   
    secure: process.env.NODE_ENV === 'production',   
    maxAge:1000*60*60*24*24
  }
}));

/**************Web Router Paths***************/
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

// app.use(csrf());// Security, has to be after cookie and session.
// app.use(function (req, res, next) {
//   var token = req.csrfToken();
//   //res.cookie('XSRF-TOKEN', token);
//   res.locals.csrfToken = token;
//   next();
// });
// //app.use(helmet());
// app.use(flash())
// app.use(function(req, res, next){
//   /*** if there's a flash message in the session request, 
//   make it available in the response, then delete it. ***/
//   res.locals.sessionFlash = req.session.sessionFlash;
//   delete req.session.sessionFlash;
//   next();
// });


// app.use(cors());
// app.use(function(req, res, next){
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('X-XSS-Protection', '1; mode=block');
//   res.header('X-Frame-Options', 'deny');
//   res.header('X-Content-Type-Options', 'nosniff');
//   next();
// });
// app.disable("x-powered-by");

// process.on('warning', e => console.warn(e.stack));
// process.on('uncaughtException', function (err,next) {
//   console.error('Uncaught Exception');
//   console.error(err);
// });
// if (process.env.NODE_ENV !== 'production') {
//   app.enable('trust proxy');
// }

// app.use((req,res,next)=>{
//   res.locals.user = req.session.user;
//   next();
// });
/**************User Router Paths***************/


/**********************Vendor Router Paths************************ */

// var vendorRouter = require('./routes/vendorRouter/vendor')

// app.use('/vendor/**',vendorRouter)

app.use("/user/**",function(req,res,next){
  console.log(req.session)
  if(req.session.userType == 'user'){
    console.log('$$$$$$$$$$$')
    //console.log("IP:"+res.socket.remotePort+":"+res.socket.remoteAddress)
    next();
  }else{
    console.log('~~~ERROR!!~~~')
    console.log('<---Redirecting...to login page--->')
    res.redirect('/');
  }
})


app.use("/common/**",function(req,res,next){
  console.log(req.session)
  if(req.session.userType == 'user'||req.session.userType == 'vendor'||req.session.userType == 'admin'){
    console.log('$$$$$$$$$$$')
    //console.log("IP:"+res.socket.remotePort+":"+res.socket.remoteAddress)
    next();
  }else{
    console.log('~~~ERROR!!~~~')
    console.log('<---Redirecting...to login page--->')
    res.redirect('/');
  }
})


app.use("/vendor/**",function(req,res,next){
  if(req.session.userType == 'vendor'){
    //console.log("IP:"+res.socket.remotePort+":"+res.socket.remoteAddress)
    next();
  }else{
    console.log('~~~ERROR!!~~~')
    console.log('<---Redirecting...to login page--->')
    res.redirect('/');
  }
})


app.use("/admin/**",function(req,res,next){
  console.log(req.session)
  if(req.session.userType == 'admin'){
    //console.log("IP:"+res.socket.remotePort+":"+res.socket.remoteAddress)
    next();
  }else{
    console.log('~~~ERROR!!~~~')
    console.log('<---Redirecting...to login page--->')
    res.redirect('/');
  }
})
app.use('/logout', function(req, res, next) {

  if(req.session.userType){
      req.session.user='';
      req.session.userType = ''
      req.session.sessionFlash ={
      type:'success',
      message:"Log Out successfull"
    }
    res.redirect('/'); 
  }else{
     req.session.sessionFlash ={
      type:'warning',
      message:"Unknown Error..Try After SomeTime"
    }
    res.redirect('#');
  }
  
});
app.get('/favicon.ico', (req, res) => res.status(204));


/**************************Admin Routes**************************** */


var userRouter = require('./routes/userRouter/user');
var vendorRouter = require('./routes/vendorRouter/vendor');
var commonRouter = require('./routes/commonRouter/common');
var login = require('./routes/users');


app.use('/user',userRouter)
app.use('/vendor',vendorRouter)
app.use('/common',commonRouter)
app.use('/login',login)


var adminRouter = require('./routes/adminRouter/admin');

app.use('/admin/',adminRouter)

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("ENV:"+req.app.get('env'))
  // render the error page.
  // Expected errors always throw Error.
  // Unexpected errors will either throw unexpected stuff or crash the application.
  if (Object.prototype.isPrototypeOf.call(Error.prototype, err)) {
    return res.status(err.status || 500).render('error',{message:res.locals.message});
  }

  console.error('~~~ Unexpected error exception start ~~~');
  console.error(err);
  console.error('~~~ Unexpected error exception end ~~~');

  //return res.status(500).json({ error: '⁽ƈ ͡ (ुŏ̥̥̥̥םŏ̥̥̥̥) ु' });

  res.status(500).render('error',{message:res.locals.message});
});

module.exports = app;