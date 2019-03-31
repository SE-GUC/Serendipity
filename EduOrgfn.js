const axios = require('axios');
const functions = {



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
 
}
};
module.exports=functions; 

