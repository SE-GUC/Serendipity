const axios = require('axios');
const Course = require('./models/Course')

const functions = {
        updateCourse: async (id,req) => {
            try{
            const path = 'http://localhost:3000/api/courses/'+id
            await axios.put(path,req)
            const upd = await Course.findById(id)
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
        },
        getCourse: async () => {
            const course= await axios.get('http://localhost:3000/api/courses/')
            return course
        },
        getCourses: async (id) => {
            const course = await axios.get('http://localhost:3000/api/courses/'+id)
            return course
        },
        deleteCourse: async (id) => {
           await axios.delete('http://localhost:3000/api/courses/'+id).then(res => res.data).catch(e=>'error')
        } 
};

module.exports = functions;
