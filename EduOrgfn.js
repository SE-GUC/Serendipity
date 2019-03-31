const axios = require('axios');
const functions = {
createEduOrg: async() =>{
    const NewEdu =await EducationalOrganization.create(
    {
    userName:'YYA',
    name:'YYYQAA',
    password:232323,
    email:'YYGA@gg.com'
    });
    const allEdu=  await axios.get('http://localhost:3000/api/educationalOrganizations/')
    return allEdu.data
 },
 createEduOrg2: async() =>{
    const NewEdu =await EducationalOrganization.create(
    {
    userName:'YYAN',
    name:'YYYQAAN',
    password:2132323,
    email:'NYYGA@gg.com'
    });
    const allEdu=  await axios.get('http://localhost:3000/api/educationalOrganizations/')
    return allEdu.data
}


};
module.exports = functions;
//yara get by id 
// createMaster: async(data) =>{
//     return axios.post(`http://localhost:3000/api/educationalOrganizations/`,await data)
// },
// readMaster: (id) =>{
//     return axios.get(`http://localhost:3000/api/educationalOrganizations/${id}`)
// },