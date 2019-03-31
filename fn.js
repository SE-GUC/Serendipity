const axios = require('axios');

const functions = {
        updateCourse: async (id,req) => {
            try{
            const path = 'http://localhost:3000/api/courses/'+id
            console.log(path)
            await axios.put(path,req)
            console.log('wa7ed')
            const upd = await axios.get(path)
            console.log('etneen')
            return upd
            }
            catch(err){
                console.log('talata')
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
            const course= axios.get('http://localhost:3000/api/courses/')
            return course
        },
        getCourses: async (id) => {
            const course = axios.get('http://localhost:3000/api/courses/'+id)
            return course
        },
        deleteCourse: async (id) => {
            axios.delete('http://localhost:3000/api/courses/'+id).then(res => res.data).catch(e=>'error')
        } 
};

module.exports = functions;
