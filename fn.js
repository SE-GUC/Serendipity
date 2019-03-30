
const axios = require('axios');




  
const functions = {
        updateWorkshop: async (id,req) => {
            try{
            await axios.put('http://localhost:3000/api/workshops/'+id,req)
            const upd = await axios.get('http://localhost:3000/api/workshops/'+id)
            return upd
            }
            catch(err){
                return "error"
            }
        },
        createWorkshop: async(req) =>{
            try{
            const newCourse =  await axios.post('http://localhost:3000/api/workshops/',req)
            return newCourse
            }
            catch(err){
                return "error"
            }
        }

};

module.exports = functions;