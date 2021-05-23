var dbService = require('../../src/services/dbService');

const refService = {

    fetchRefBy: async function (ref) {
        console.log('Ref service', ref)
        let resp = {}

        try {

            let query = {
                text: 'select "TUM_User" from tbl_user_mstr where "TUM_User_RefId"=$1',
                values: [ref]
            }
            resp = await dbService.execute(query)
        } catch (e) {

            console.log(e)

        }

        return resp
    },
    refCountfetch: async function (id) {
        let gen1 = []
        let gen2 = []
        let gen3 = []
        let gen4 = []
        let gen5 = []
        try {
            let query = {
                text: 'select * from fetch_refCount($1)',
                values: [parseInt(id)]

            }
            gen1 = await dbService.execute(query)
            if (gen1.length != 0) {

                    for(gen1Id=0;gen1Id<gen1.length;gen1Id++) {
                        console.log(gen1Id)
                        console.log(gen1[0])

                    try {
                        let query = {
                            text: 'select * from fetch_refCount($1)',
                            values: [parseInt(gen1[gen1Id].userid)]
                        }
                        gen2 = await dbService.execute(query)
                        
                        if (gen2.length != 0) {
                            
                                for(gen2Id=0;gen2Id<gen2.length;gen2Id++) {

                                try {
                                    let query = {
                                        text: 'select * from fetch_refCount($1)',
                                        values: [parseInt(gen2[gen2Id].userid)]
                                    }
                                    gen3 = await dbService.execute(query)

                                    if (gen3.length != 0) {
                                        for(gen3Id=0;gen3Id<gen3.length;gen3Id++) {

                                            try {
                                                let query = {
                                                    text: 'select * from fetch_refCount($1)',
                                                    values: [parseInt(gen3[gen3Id].userid)]
                                                }
                                                gen4 = await dbService.execute(query)

                                                if (gen4.length != 0) {
                                                    for(gen4Id=0;gen2Id<gen4.length;gen4Id++) {

                                                        try {
                                                            let query = {
                                                                text: 'select * from fetch_refCount($1)',
                                                                values: [parseInt(gen4[gen4Id].userid)]
                                                            }
                                                            gen5 = await dbService.execute(query)

                                                        }
                                                        catch (e) {
                                                            console.log(e)

                                                        }

                                                    }



                                                }

                                            }
                                            catch (e) {
                                                console.log(e)

                                            }

                                        }



                                    }

                                }
                                catch (e) {
                                    console.log(e)

                                }

                            }



                        }

                    }
                    catch (e) {
                        console.log(e)

                    }

               
                }



            }


        } catch (e) {
            console.log(e)
        }
        
        let gen2to5Count = gen2.length + gen3.length + gen4.length + gen5.length
        let gen1Count = gen1.length
        console.log(gen1Count)
        return [gen1Count,gen2to5Count]
    },

    fetch_refDetailsById: async function (id){  
        let resp = {}
        try {
            resp = await dbService.execute(`select * from fetch_refDetails(${parseInt(id)})`)
        } catch (e) {
            console.log(e)
            
        }
        return resp
    }

}

module.exports = refService