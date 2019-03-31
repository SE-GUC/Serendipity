
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

    deleteJob: async (id) => {
        await axios.delete('http://localhost:3000/api/jobs/:'+id).then(res => res.data).catch(e=>'error')
    },
    getJobs: async () => {
        const jobs=await axios.get('http://localhost:3000/api/jobs/')
        return jobs
    },
    getJob: async (id) => {
        const job = await axios.get('http://localhost:3000/api/jobs/'+id)
        return job
    },
    updateJob: async (id,data) => {
      
        await axios.put('http://localhost:3000/api/jobs/'+id,data).then(res => res.data).catch(e=>'error')
    },
    createJob: async (data) => {
       await axios.post('http://localhost:3000/api/jobs/',data).then(res => res.data).catch(e=>'error')
    },






getEduOrg: async () => {
    const educationalOrganizations= await axios.get('http://localhost:3000/api/educationalOrganizations/')
    return educationalOrganizations
},

getEduOrgById: async (id) => {
  const educationalOrganizations = axios.get('http://localhost:3000/api/educationalOrganizations/'+id)
  return educationalOrganizations
},


createEduOrg: async (data) => {
  await axios.post('http://localhost:3000/api/educationalOrganizations/',data).then(res => res.data).catch(e=>'error')
},

deleteEduOrg: async(id) => {
   await axios.delete('http://localhost:3000/api/educationalOrganizations/'+id).then(res => res.data).catch(e=>'error')

},


updateEduOrg: async (id,data) => {
    await axios.put('http://localhost:3000/api/educationalOrganizations/'+id,data).then(res => res.data).catch(e=>'error')
 
},

        //Yasmine Maheeb
        updateWorkshopCRUD: async (id,req) => {
            try{
            await axios.put('http://localhost:3000/api/workshops/'+id,req)
            console.log(1)
            const upd = await axios.get('http://localhost:3000/api/workshops/'+id)
            console.log(upd)
            return upd
            }
            catch(err){
                // console.log(err.error.details[0].message)
                return "error"
            }
        },
        //Yasmine Maheeb
        createWorkshop: async(req) =>{
            try{
            const newCourse =  await axios.post('http://localhost:3000/api/workshops/',req)
            return newCourse

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

        //Yara Amr
        updateWorkshop: async() =>{
            const newwks= await Workshop.update(
                 { _id: "5c9e968d78f9b35e1c0afd11"}, 
                 { eduOrganisation:'GQA' }
                 //done
            );
             // const NewWKS =await Workshop.update( 
             // {
             // eduOrganisation:'GQA'
             
             // });
             const allWKS=  await axios.get('http://localhost:3000/api/workshops/')
             return allWKS.data
         },

         getWorkshop: async () => {
            const course= axios.get('http://localhost:3000/api/workshops/')
            return course
        },
        getWorkshops: async (id) => {
            const course = axios.get('http://localhost:3000/api/workshops/'+id)
            return course
        },
        //  createWorkshop: async (data) => {
        //    axios.post('http://localhost:3000/api/workshops/',data).then(res => res.data).catch(e=>'error')

        //  },
        // updateWorkshop: async (id,data) => {
        //     axios.put('http://localhost:3000/api/workshops/'+id,data).then(res => res.data).catch(e=>'error')
        // },

        deleteCourse: async (id) => {
            axios.delete('http://localhost:3000/api/courses/'+id).then(res => res.data).catch(e=>'error')

        deleteWorkshop: async (id) => {
            axios.delete('http://localhost:3000/api/workshops/'+id).then(res => res.data).catch(e=>'error')

        } ,





       // workshop functions
        getWorkshop: async () => {
            const course= axios.get('http://localhost:3000/api/workshops/')
            return course
        },
        getWorkshops: async (id) => {
            const course = axios.get('http://localhost:3000/api/workshops/'+id)
            return course
        },
         createWorkshop: async (data) => {
           axios.post('http://localhost:3000/api/workshops/',data).then(res => res.data).catch(e=>'error')
         },
        // updateWorkshop: async (id,data) => {
        //     axios.put('http://localhost:3000/api/workshops/'+id,data).then(res => res.data).catch(e=>'error')
        // },
        deleteWorkshop: async (id) => {
            axios.delete('http://localhost:3000/api/workshops/'+id).then(res => res.data).catch(e=>'error')
        } 




getPartners: async () => {
    const partners= axios.get('http://localhost:3000/api/partners/')
    return partners
},
getPartner: async (id) => {
    const partner = axios.get('http://localhost:3000/api/partners/'+id)
    return partner
},
createPartner: async (data) => {
    axios.post('http://localhost:3000/api/partners/',data).then(res => res.data).catch(e=>'error')
},
updatePartner: async (id,data) => {
    axios.put('http://localhost:3000/api/partners/'+id,data).then(res => res.data).catch(e=>'error')
},
deletePartner: async (id) => {
    axios.delete('http://localhost:3000/api/partners/'+id).then(res => res.data).catch(e=>'error')
},



    default: async =>{
        return axios.get(`http://localhost:3000/api/masterclasses`)
    },
    createMaster: async(data) =>{
        return axios.post(`http://localhost:3000/api/masterclasses/`,data)
    },
    readMaster: async(id) =>{
        return axios.get(`http://localhost:3000/api/masterclasses/${id}`)
    },
    deleteMaster: async(id) =>{
        return axios.delete(`http://localhost:3000/api/masterclasses/${id}`)
    },
    updateMaster: async(id,data) =>{
        return axios.put(`http://localhost:3000/api/masterclasses/${id}`,data)
    },



    //////////
getmasters: async () => {
    const masters= axios.get('http://localhost:3000/api/masterclasses/')
    return masters
},
createMasterM: async (data) => {
    axios.post('http://localhost:3000/api/masterclasses/',data).then(res => res.data).catch(e=>'error')
},
updateMasterM: async (id,data) => {



    axios.put('http://localhost:3000/api/masterclasses/${id}',data).then(res => res.data).catch(e=>'error')



    axios.put('http://localhost:3000/api/masterclasses/'+id,data).then(res => res.data).catch(e=>'error')



},
deleteMasterM: async (id) => {



    axios.delete('http://localhost:3000/api/masterclasses/${id}').then(res => res.data).catch(e=>'error')



    axios.delete('http://localhost:3000/api/masterclasses/'+id).then(res => res.data).catch(e=>'error')

},

getMasterM: async (id) => {

    const partner = axios.get('http://localhost:3000/api/masterclasses/'+id)

    return partner

},
   
    getAdmins: async () => {
        const admins= await axios.get('http://localhost:3000/api/admins/')
        return admins
    },
    getAdmin: async (id) => {
        const admin= await axios.get('http://localhost:3000/api/admins/'+id)
        return admin
    },
    updateAdmin: async (id,data) => {
        //console.log("10")
        await axios.put('http://localhost:3000/api/admins/'+id,data).then(res => res.data).catch(e=>'error')
//console.log("11")
    },
    createAdmin: async (data) => {
        await axios.post('http://localhost:3000/api/admins/',data).then(res => res.data).catch(e=>'error')
    },
    deleteAdmin: async (id) => {
        await axios.delete('http://localhost:3000/api/admins/'+id).then(res => res.data).catch(e=>'error')
    }
};

module.exports = functions;




