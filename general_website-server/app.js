// 引入第三方库
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// 使用第三方库
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用路由配置
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 捕获404错误，并转发至错误容器
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理器
app.use(function(err, req, res, next) {
  //生产环境下的错误处理器，不会将错误信息泄露给用户
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 开发环境下的错误处理器，将错误信息渲染error模版到浏览器
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
