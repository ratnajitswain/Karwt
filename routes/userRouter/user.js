var express = require('express');
var router = express.Router();
var userController = require('../../src/Controllers/userController')
var refService = require('../../src/services/refService')

router.get('/dashboard',async function (req, res){  

    let id = req.session.userid
    let result = {}
    try {

        result = await userController.fetchUserDetailsById(id)
        console.log('#########################',result)

        let genRefCount = await refService.refCountfetch(result[0].userid)
                if(genRefCount.length != 0 ){  
                    result[0].gen1 = genRefCount[0]
                    if(genRefCount[1]!=0){  
                        result[0].gen2to5 = genRefCount[1]
                    }else{  
                        result[0].gen2to5 = 0
                    }


                    var A = parseInt(result[0].gen1);
                    var B = parseInt(result[0].gen2to5);
                    var G1 = A
                    var G2 = A * B
                    var G3 = G2 * B
                    var G4 = G3 * B
                    var G5 = G4 * B

                    result[0].totalPoints = G1+G2+G3+G4+G5
                    result[0].totalRef = A+B 
                    result[0].refurl = process.env.URL+'?ref='+result[0].refid
                    
                }

           

        
    } catch (e) {
        console.log(e)
        
    }
    


    res.render('userDashboard',{result:result})
})




router.get('/refCount',async function(req, res){  
    var result = {}
    try {
        result =await  refService.refCountfetch()
    } catch (e) {
        console.log(e)
    }
    res.send(result)
})

router.get('/fetch_userdetailsbyid',async function (req, res){  
  let  resp={ }
    let id = req.session.userid
    try {
        resp = await userController.fetchUserDetailsById(id)
    } catch (e) {
        
    }
    res.send(resp)
})

module.exports = router;