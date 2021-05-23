var express = require('express');
var router = express.Router();
var commonController = require('../src/Controllers/commonController')
var adminController = require('../src/Controllers/adminController')


/* GET home page. */
router.get('/',async function(req, res, next) {
  req.session.refId = req.query.ref
  res.render('index')
// res.send(states)

})

router.get('/about',async function(req, res, next){  
  res.render('about')
})

router.get('/contact',async function(req, res, next){  
  res.render('contact')
})
/* GET home page. */


router.get('/fetchBlogs',async function(req, res, next){  
  let result = []
  try {

      result =await adminController.fetchBlogList()
      
  } catch (e) {
      console.log(e)
  }
  res.send(result)
})



router.get('/fetchAllStates',async function(req, res, next) {
  var result = {}
   try {
     result = await commonController.fetchAllStates()
   } catch (e) {
     console.log(e)
   }
   res.send(result)
   // res.render('index', { title: 'Express' });
 });


 


 
router.get('/fetchDistByStateId',async function(req, res, next) {
  var result = {}
   try {
     result = await commonController.fetchDistByStateId(req)
   } catch (e) {
     console.log(e)
   }
   res.send(result)
   // res.render('index', { title: 'Express' });
 });

 router.get('/fetchConstByDistId',async function(req, res, next) {
  var result = {}
   try {
     result = await commonController.fetchConstByDistId(req)
   } catch (e) {
     console.log(e)
   }
   res.send(result)
   // res.render('index', { title: 'Express' });
 });

 router.get('/otpverify',async function(req, res, next) {
  var response = {}
   try {
    response = await commonController.otpsent(req)
   } catch (e) {
     console.log(e)
   }
   res.send(response)
 });



module.exports = router;
