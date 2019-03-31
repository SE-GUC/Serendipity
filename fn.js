const axios = require('axios');

const functions = {
        updateCourse: async (id,req) => {
            try{
            await axios.put('http://localhost:3000/api/courses/'+id,req)
            const upd = await axios.get('http://localhost:3000/api/courses/'+id)
            return upd
            }
            catch(err){
                return "error"
            }
        },
        createCourse: async(req) =>{
            try{
            return await axios.post('http://localhost:3000/api/courses/',req)
            }
            catch(err){
                return "error"
            }
        },
        applyForCourse: async(cid,mid) =>{
            const path = 'http://localhost:3000/api/courses/'+cid+'/apply'
            return await axios.put(path,{"applicantId" : "\""+mid+"\" "} )
        }

};

module.exports = functions;
