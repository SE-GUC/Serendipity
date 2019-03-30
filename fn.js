const axios = require('axios');
const functions = {
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
}
};
module.exports=functions;