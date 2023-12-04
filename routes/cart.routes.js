var express = require('express');
var router = express.Router();
const products = require('../data/data')
const session = require('express-session')

router.get('/', function (req, res, next) {
   res.redirect('/cart/getAll')
})

router.get('/getAll/productsInCart', function (req, res, next) {
   if (!req.session.cart) {
      req.session.cart = []
   }
   const productsInCart = req.session.cart
   res.sendStatus(204)
})

router.get('/getAll', function (req, res, next) {
   if (!req.session.cart) {
      req.session.cart = []
   }
   const productsInCart = req.session.cart
   totalQ = 0;
   for (let product of productsInCart) {
      totalQ += product.item;
   }
   res.render('cart', {
      title: 'Košarica',
      list: productsInCart,
      totalQ: totalQ
   })
})


router.get('/add/:id', function (req, res, next) {
   if (!req.session.cart) {
      req.session.cart = []
   }
   const productsInCart = req.session.cart
   console.log(productsInCart);
   let idCart = parseInt(req.params.id);
   let item = products.getProductById(idCart);
   let search = productsInCart.find((x) => x.id === item.id)
   if (search === undefined) {
      productsInCart.push({
         id: item.id,
         item: parseInt(item.quantity) + 1,
         image: item.image,
         name: item.name
      });
   } else {
      search.item += 1;
   }
   console.log(productsInCart);
   req.session.cart = productsInCart
   res.sendStatus(204)
})

router.get('/remove/:id', function (req, res, next) {
   if (!req.session.cart) {
      req.session.cart = []
   }
   const productsInCart = req.session.cart
   let idCart = parseInt(req.params.id);
   let item = products.getProductById(idCart)
   let search = productsInCart.find((x) => x.id === item.id)
   if (search) {
      search.item--;
      if (search.item === 0) {
         let index = productsInCart.findIndex(x => {
            return x.id === item.id
         })
         if (index == -1) {
            index = 0
         }
         productsInCart.splice(index, 1);
      }
   }
   console.log(productsInCart)
   req.session.cart = productsInCart
   res.sendStatus(204)
   //res.redirect('/cart')
})

module.exports = router;