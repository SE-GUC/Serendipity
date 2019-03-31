const axios = require('axios');
const functions = {


// createEduOrg: async(data) =>{
//      await axios.post('http://localhost:3000/api/educationalOrganizations/',data).then(res=> res.data).catch(e=>'error')
//  },
//  createEduOrg2: async() =>{
//     const NewEdu =await EducationalOrganization.create(
//     {
//     userName:'YYAN',
//     name:'YYYQAAN',
//     password:2132323,
//     email:'NYYGA@gg.com'
//     });
//     const allEdu=  await axios.get('http://localhost:3000/api/educationalOrganizations/')
//     return allEdu.data
// },
getEduOrg: async () => {
    const educationalOrganizations= await axios.get('http://localhost:3000/api/educationalOrganizations/')
    return educationalOrganizations
},

createEduOrg: async (data) => {
  await axios.post('http://localhost:3000/api/educationalOrganizations/',data).then(res => res.data).catch(e=>'error')
},

deleteEduOrg: async(id) => {
   await axios.delete('http://localhost:3000/api/educationalOrganizations/'+id).then(res => res.data).catch(e=>'error')}

};
module.exports=functions; 

