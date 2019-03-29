const axios = require('axios');
const functions = {
createEduOrg: async() =>{
    const NewEdu =await EducationalOrganization.create(
    {
    userName:'GQA',
    name:'GGQQAA',
    password:232323,
    email:'QGA@gg.com'
    });
    const allEdu=  await axios.get('http://localhost:3000/api/educationalOrganizations/')
    return allEdu.data
},//yara get by id 
createMaster: async(data) =>{
    return axios.post(`http://localhost:3000/api/educationalOrganizations/`,await data)
},
readMaster: (id) =>{
    return axios.get(`http://localhost:3000/api/educationalOrganizations/${id}`)
},
};
module.exports = functions;