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
        },

        getCourse: async () => {
            const course= axios.get('http://localhost:3000/api/courses/')
            return course
        },
        getCourses: async (id) => {
            const course = axios.get('http://localhost:3000/api/courses/'+id)
            return course
        },
        //  createCourse: async (data) => {
        //    axios.post('http://localhost:3000/api/courses/',data).then(res => res.data).catch(e=>'error')
        //  },
        // updateWorkshop: async (id,data) => {
        //     axios.put('http://localhost:3000/api/workshops/'+id,data).then(res => res.data).catch(e=>'error')
        // },
        deleteCourse: async (id) => {
            axios.delete('http://localhost:3000/api/courses/'+id).then(res => res.data).catch(e=>'error')
        } 

};

module.exports = functions;
