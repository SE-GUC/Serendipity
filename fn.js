const axios = require('axios');
const functions = {
   
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
