const express = require('express')
const app = express()
var path = require('path')
const session = require('express-session')

app.use(express.static(path.join(__dirname, 'public')));

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(session({
   secret: 'web',
   resave: 0,
   saveUninitialized: false
}))

app.use('/', homeRouter);
app.use('/cart', cartRouter);

app.listen(3000)