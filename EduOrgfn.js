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
}
};
module.exports = functions;