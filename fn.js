
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


