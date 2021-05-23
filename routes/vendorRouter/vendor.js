var express = require('express');
var router = express.Router();
var vendorController = require('../../src/Controllers/vendorController')
var commonController = require('../../src/Controllers/commonController')

router.get('/dashboard',async function (req, res){  
    res.render('vendorDashboard')
})

router.get('/blog',async function(req, res, next) {

 
    res.render('blog')
  
  })

  router.get('/fetchBlogList',async function(req, res, next) {

    var result = {}
    try {
        result =await commonController.fetchBlogList()
    } catch (e) {
        console.log(e)
    }
    res.send(result)
  
  })

router.get('/fetch_vendordetailsbyid',async function (req, res){  
  let  resp={ }
    let id = req.session.vendorid
    try {
        resp = await vendorController.fetchVendorDetailsById(id)
    } catch (e) {
        
    }
    res.send(resp)
})


module.exports = router;