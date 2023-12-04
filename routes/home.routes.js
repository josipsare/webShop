var express = require('express');
var router = express.Router();
const products = require('../data/data')

router.get('/', function (req, res, next) {
   res.redirect('/home');
})

router.get('/home', function (req, res, next) {
   res.redirect('/home/getCategories')
})

router.get('/home/getCategories', function (req, res, next) {
   const data = products.getCategory('')
   if (!req.session.cart) {
      req.session.cart = []
   }
   const productsInCart = req.session.cart
   totalQ = 0;
   for (let product of productsInCart) {
      totalQ += product.item;
   }
   res.render('home', {
      current_cat: 'Sve Gume',
      quantity: totalQ,
      selectedCategory: '',
      data: data,
      session: req.session
   })
})

router.get('/home/getProducts/:id', function (req, res, next) {
   const data = products.getCategory('');
   const productsInCart = req.session.cart
   totalQ = 0;
   for (let product of productsInCart) {
      totalQ += product.item;
   }
   let category = req.params.id;
   category = category.replace('_', ' ');
   res.render('home', {
      current_cat: category,
      quantity: totalQ,
      selectedCategory: category,
      data: data,
      session: req.session
   })
})


module.exports = router;