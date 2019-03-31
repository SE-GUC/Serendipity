
const axios = require('axios');




  
const functions = {
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
        deleteWorkshop: async (id) => {
            axios.delete('http://localhost:3000/api/workshops/'+id).then(res => res.data).catch(e=>'error')
        } 

};

module.exports = functions;


