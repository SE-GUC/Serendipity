// const axios = require('axios');
// const functions = {
// createEduOrg: async() =>{
//     const NewEdu =await EducationalOrganization.create(
//     {
//     userName:'GQA',
//     name:'GGQQAA',
//     password:232323,
//     email:'QGA@gg.com'
//     });
//     const allEdu=  await axios.get('http://localhost:3000/api/educationalOrganizations/')
//     return allEdu.data
// }
// };
// module.exports = functions;
const axios = require('axios');
const functions = {
getEduOrg: async () => {
    const educationalOrganizations= axios.get('http://localhost:3000/api/educationalOrganizations/')
    return educationalOrganizations
},

createEduOrg: async (data) => {
    axios.post('http://localhost:3000/api/educationalOrganizations/',data).then(res => res.data).catch(e=>'error')
},

deleteEduOrg: async(id) => {
    axios.delete('http://localhost:3000/api/educationalOrganizations/'+id).then(res => res.data).catch(e=>'error')}

};
module.exports=functions; 