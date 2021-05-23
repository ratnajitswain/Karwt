
var express = require('express');
var router = express.Router();
var commonController = require('../../src/Controllers/commonController')

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
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&',result)
    res.send(result)
  
  })


  router.get('/posts',async function(req, res, next) {

    var result = {}
    try {
        result =await commonController.fetchBlogById(req)
    } catch (e) {
        console.log(e)

        
    }
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&',result)
    res.render('posts',{blog:result})
  
  })

  module.exports = router