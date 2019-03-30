const axios = require('axios');
const Course = require('./models/Course')
const mongoose = require('mongoose')

// mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
//     useNewUrlParser: true
//   })
  
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
        }

};

module.exports = functions;
