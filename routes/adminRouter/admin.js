var express = require('express');
var router = express.Router();
var adminController = require('../../src/Controllers/adminController')
var userController = require('../../src/Controllers/userController')

var vendorController = require('../../src/Controllers/vendorController')
var refService = require('../../src/services/refService')
var dbService = require('../../src/services/dbService')

router.get('/dashboard',async function (req, res){  
let result = [{'username' :'Super Admin'}]
try {
    result1 =await adminController.getTotalRegisteredUsers();
    result2 =await adminController.getRegisteredUsersForToday();
    
    total = result1[0].count;
    total1 = result2[0].count;
} catch (e) {
    console.log(e)
}


    res.render('adminDashboard',{result:result,totalUsers:total,todayRegistered:total1})
})

router.get('/manageUsers',async function (req, res){ 

    res.render('manageUser')
})
router.get('/manageVendors',async function (req, res){ 

    res.render('manageVendor')
})

  
//   router.get('/fetchUserList',async function (req,res) {
  
//   let param1 = req.query.param1;
//   let draw = req.query.draw;
//   let start = req.query.start;
//   let length = req.query.length;
  
//   let sql1 = 'select * from tbl_user_mstr where "TUM_User_DeletedFlag"= 0';
//   if(param1!=null && param1!=''){
//     sql1+=' and "TUM_User_Name" = \''+param1+'\'';
//   }
//   const query1 = {
//     text: sql1,
//     rowAsArray: true
//   }
//   var result = await dbService.execute(query1);
//   var total =result.length;
  
//   let sql = 'select "TUM_User", "TUM_User_Name", "TUM_User_Email", "TUM_User_Mobile" from tbl_user_mstr where "TUM_User_DeletedFlag"= 0';
//   if(param1!=null && param1!=''){
//     sql+=' and "TUM_User_Name" = \''+param1+'\'';
//   }
//   sql += 'offset $1 limit $2'; 
//   const query = {
//     text: sql,
//     values:[start,length],
//     rowAsArray: true
//   }
  
//   var data = await dbService.execute(query);
//   console.log(data)
//   if(data.length != 0){  
//     for(i=0;i<data.length;i++){  

//         let genRefCount = await refService.refCountfetch(data[i].TUM_User)
//         console.log('RefCount',genRefCount)
//         if(genRefCount.length != 0 ){  
//             data[i].gen1 = genRefCount[0]
//             if(genRefCount[1]!=0){  
//                 data[i].gen2to5 = genRefCount[1]
//             }
//             else{  
//                 data[i].gen2to5 = 0
//             }
            
//         }
//         data[i].action = '<a href="javascript:void" onclick= deleteUser(\''+data[i].TUM_User+'\') ><i class="fa fa-trash"></i></a>'+

//                             +'&nbsp;&nbsp <a data-toggle="modal" title="view" href="javascript:void" onclick = viewInModel(\''+data[i].TUM_User+'\') ><i class="fa fa-search"></i></a>'
//     }
// }
//   var users = {data:data};
//   users.recordsTotal = total;
//   users.recordsFiltered = total;
//   users.draw = parseInt(draw);
//   console.log(users)
//   res.send(users);
//   })

router.get('/fetchUserList',async function (req, res){  
    result = {}
    try {

        result =await adminController.viewUserList()

        if(result.length != 0){  
            for(i=0;i<result.length;i++){  

                let genRefCount = await refService.refCountfetch(result[i].TUM_User)
             
                if(genRefCount.length != 0 ){  
                    result[i].gen1 = genRefCount[0]
                    if(genRefCount[1]!=0){  
                        result[i].gen2to5 = genRefCount[1]
                    }
                    else{  
                        result[i].gen2to5 = 0
                    }
                    
                }
                result[i].action = '&nbsp&nbsp;<a href="javascript:void();" onclick="viewUser(\''+result[i].TUM_User+'\')"><i class="fa fa-search"></i></a>'+
                '&nbsp&nbsp;<a href="javascript:void();" onclick="deleteUser(\''+result[i].TUM_User+'\')"><i class="fa fa-trash"></i></a>';  
            }
        }
        
    } catch (e) {
        console.log(e)
    }
console.log(result)
    res.json(result)
})

router.get('/fetch_refDetailsById',async function(req, res){  
   let result = []
    try {
        result = await refService.fetch_refDetailsById(req.query.id)

        if(result.length != 0){  
            for(i=0;i<result.length;i++){  
                let genRefCount = await refService.refCountfetch(result[i].userid)
                if(genRefCount.length != 0 ){  
                    result[i].gen1 = genRefCount[0]
                    if(genRefCount[1]!=0){  
                        result[i].gen2to5 = genRefCount[1]
                    }else{  
                        result[i].gen2to5 = 0
                    }
                    
                }
               
            }
        }
        
    } catch (e) {
        console.log(e)
    }
    console.log(result)
    res.send(result)
})

router.get('/fetchVendorList',async function (req, res){  
   let result = []
    try {

        result =await adminController.viewVendorList()
        console.log(result)

        if(result.length != 0){  
            result.forEach((i)=>{  
                i.action = '&nbsp&nbsp;<a href="javascript:void();" onclick="viewVendor(\''+i.TVM_Vendor+'\')"><i class="fa fa-search"></i></a>'+
                '&nbsp&nbsp;<a href="javascript:void();" onclick="deleteVendor(\''+i.TVM_Vendor+'\')"><i class="fa fa-trash"></i></a>';  
            })
        }
        
    } catch (e) {
        console.log(e)
    }

    res.send(result)
})



router.get('/fetch_vendordetailsbyid',async function (req, res){  
   let resp={ }
    let id = req.query.id
    try {
        resp = await vendorController.fetchVendorDetailsById(id)
    } catch (e) {
        
    }
    res.send(resp)
})


router.get('/fetch_userdetailsbyid',async function (req, res){  
   let resp={ }
    let id = req.query.id
    try {
        resp = await userController.fetchUserDetailsById(id)
    } catch (e) {
        
    }
    res.send(resp)
})

router.get('/deleteUserById',async function (req, res){  
   let result = []
    try {

        result =await adminController.deleteUserById(req)
        
    } catch (e) {
        console.log(e)
    }
    res.send(result)
})

router.get('/deleteVendorById',async function (req, res){  
   let result = []
    try {

        result =await adminController.deleteVendorById(req)
        
    } catch (e) {
        console.log(e)
    }
    res.send(result)
})


router.post('/createBlog',async function (req, res){  
    let result = []
     try {
 
         result =await adminController.createBlog(req)
         
     } catch (e) {
         console.log(e)
     }
     res.send(result)
 })
 
 router.get('/manageBlogs',function (req,res) {
    res.render('manageBlog');
  })

 router.get('/fetchBlogList',async function (req, res){  
    let result = []
     try {
 
         result =await adminController.fetchBlogList()

         result.forEach((item)=>{  
            
            item.action = '&nbsp&nbsp;<a href="javascript:void();" onclick="editblog(\''+item.blog_id+'\')"><i class="fa fa-edit"></i></a>'+
            '&nbsp&nbsp;<a href="javascript:void();" onclick="deleteBlog(\''+item.blog_id+'\')"><i class="fa fa-trash"></i></a>';      
         })
         
     } catch (e) {
         console.log(e)
     }
     res.send(result)
 })

 router.get('/deleteBlog',async function (req, res){  
    let result = {}
     try {
 
         result =await adminController.deleteBlog(req)
         
     } catch (e) {
         console.log(e)
     }
     res.send(result)
 })

 router.get('/editBlog',async function (req, res){  
    let result = {}
     try {
 
         result =await adminController.editBlog(req)
         
     } catch (e) {
         console.log(e)
     }
     res.send(result)
 })

 router.post('/updateBlog',async function (req, res){  
     console.log(req.body)
    let result = {}
     try {
 
         result =await adminController.updateBlog(req)
         
     } catch (e) {
         console.log(e)
     }
     res.send(result)
 })

 var Multer = require('multer');
 var storage = Multer.diskStorage({
     destination: function (req, file, cb) {
         // Uploads is the Upload_folder_name
         cb(null, "public/uploads/blogimages")
    
     },
     filename: function (req, file, cb) {
       
       cb(null, file.fieldname + "-" + Date.now()+".jpg")
     }
 })
 
 const upload = Multer({
     storage: storage,
     limits: {
         fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
     }
 });


 router.post('/imageUpload',upload.single('upload'), async function(req, res){  
    // var files = req.files;
    // console.log(files)
    let url = '/uploads/blogimages/'+req.file.filename
    console.log(url)
    res.send({url:url})
  });
 


 module.exports = router




