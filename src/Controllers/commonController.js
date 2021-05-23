var nodemailer = require('nodemailer');
var dbService = require('../../src/services/dbService');
const { base64encode, base64decode } = require('nodejs-base64');
const { clearCache } = require('ejs');
const DateFormatter = require('../Utils/CommonUtils');
const commonController = { 

    fetchAllStates: async function(req, res, next){  
        result = {}
        try {
            let query = {  
                text:'select * from tbl_states_mstr',
                values:[]
            }
            result = await dbService.execute(query)
        } catch (e) {
            console.log(e)
        }
        return result;
    },
    fetchDistByStateId: async function(req, res, next){  
        result = {}
        let stateId = parseInt(req.query.id)
        
        try {
            let query = {  
                text:'select * from tbl_dist_mstr where "TDM_State" = $1',
                values:[stateId]
            }
            result = await dbService.execute(query)
        } catch (e) {
            console.log(e)
        }
        return result;
    },
    fetchConstByDistId: async function(req, res, next){  
        result = {}
        let distId = parseInt(req.query.id)
        
        try {
            let query = {  
                text:'select * from tbl_const_mstr where "TCM_Dist" = $1',
                values:[distId]
            }
            result = await dbService.execute(query)
        } catch (e) {
            console.log(e)
        }
        return result;
    },
    otpsent: async function(req){
        var result=[]
            var characters       = '1234567890';
            var charactersLength = characters.length;
            for ( var i = 0; i < 5; i++ ) {
              result.push(characters.charAt(Math.floor(Math.random() * 
         charactersLength)));
           }
           var otp =  result.join('');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'ratnajitswain@gmail.com',
                pass: 'Ratna@100000'
            }
        });
        
        const mailOptions = {
            from: 'ratnajitswain@gmail.com', // sender address
            to: `${req.query.email}`, // list of receivers
            subject: 'KARWAT Registration', // Subject line
            html: `<h1>${otp}</h1><h4> is the one time password for KARWAT registraion, please enter OTP to register.</h4>`// plain text body
        };
        var message = ''
        transporter.sendMail(mailOptions, function (err, info) {
            if(err){  
                message = 'error'
                console.log(err)

            }
            else{  
                message = 'success'
                console.log(info);
            }
                
        })
        return otp
    },
    fetchBlogList:async function (req){  
        var resp = {}
 
         try {
 
             let query = {  
                 text:'select * from admin_blogs where "DeletedFlag" = 0  order by "CreatedOn" desc',
                 values:[]
             } 
             resp = await dbService.execute(query)
             if(resp.length>0){  
                 for(i=0;i<resp.length;i++){
                     resp[i].CreatedOn = await DateFormatter.DateFormatter.getStringDate(resp[i].CreatedOn)
                 }
             }
         } catch (e) {
             console.log(e)
         }
         return resp
     },
     fetchBlogById:async function (req){  
        var resp = {}
 
         try {
 
             let query = {  
                 text:'select * from admin_blogs where "DeletedFlag" = 0  and blog_id = $1',
                 values:[req.query.id]
             } 
             resp = await dbService.execute(query)
 
         } catch (e) {
             console.log(e)
         }
         return resp
     }





 }


module.exports = commonController