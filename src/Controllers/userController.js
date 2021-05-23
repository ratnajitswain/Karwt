var refService = require('../services/refService')
var dbService = require('../../src/services/dbService');
const { base64encode, base64decode } = require('nodejs-base64');
const { clearCache } = require('ejs');
const userController = {

    createUser: async function (req, res, next) {
        let user = req.body
        var resp = {}
        valid = []

        try{  
            let query = {  
                text:'select "TUM_User" from tbl_user_mstr where "TUM_User_DeletedFlag"= 0 and ("TUM_User_Email" = $1 or "TUM_User_Mobile"= $2) ',
                values:[user.email, user.mobile]
            }
            valid = await dbService.execute(query)

        }
        catch(e){  
            console.log(e)
        }
        if(valid.length==0){  
            var ref = req.session.refId
            var refBy = []

            if(ref){  
                
    
            try {
                refBy = await refService.fetchRefBy(ref)
            }
            catch (e) {
                console.log(e)
            }

            }
            console.log(ref)
            
            var refu
            if(refBy.length == 0){  
               refu = 0
            }
            else
            {  
               refu = refBy[0].TUM_User 
            }
            
            var result = [];
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 5; i++) {
                result.push(characters.charAt(Math.floor(Math.random() *
                    charactersLength)));
            }
            var id = result.join('');
            var RefId = 'KAR' + id;
    
            
    
            let password = base64encode(req.body.password)
            try {
                let query = {
                    text: `INSERT INTO public.tbl_user_mstr(
                            "TUM_User_Name", "TUM_User_Password", "TUM_User_Mobile", "TUM_User_Email", "TUM_User_State", "TUM_User_District","TUM_User_Constituency", "TUM_User_Address", "TUM_User_PINno", "TUM_User_RefId", "TUM_User_Ref_By")
                            VALUES ($1, $2,$3 ,$4,$5,$6,$7,$8,$9,$10,$11)`,
                    values: [user.name, password, user.mobile, user.email, parseInt(user.state), parseInt(user.dist),parseInt(user.constituency), user.address, user.pin, RefId, parseInt(refu)]
                }
                resp = await dbService.executeUpdate(query)
                let query1 = {
                    text: `INSERT INTO login_detail(
                            "Email", "Password", "User_Type")
                            VALUES ($1, $2,$3)`,
                    values: [user.email, password, 'user']
                }
                let resp1 = await dbService.executeUpdate(query1)
    
            } catch (e) {
                console.log(e)
            }

        }

        else{  
            resp = 'You already have an account please Signin'
        }

        
        return resp;


    },

    fetchUserDetailsById: async function(id){  
        var resp = {}
 
        try {

            let query = {  
                text:'select * from fetch_userdetailsbyid($1)',
                values:[parseInt(id)]
            } 
            resp = await dbService.execute(query)

        } catch (e) {
            console.log(e)
        }
        return resp
    
    }

    ,

    fetchUserDetailsByEmail: async function(email){  
        var resp = {}
 
        try {

            let query = {  
                text:'select "TUM_User" from tbl_user_mstr where "TUM_User_Email"=$1',
                values:[email]
            } 
            resp = await dbService.execute(query)

        } catch (e) {
            console.log(e)
        }
        return resp
    
    }


    

}


module.exports = userController;