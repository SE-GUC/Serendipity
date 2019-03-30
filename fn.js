const axios=require('axios')



const functions={
    
    
//yara amr
// createMasterclass: async() =>{
//     const Newmaster =await Masterclass.create(
//     {
//         title: 'YARAAAAB',
//         duration: '5 months',
//         Eduorganization:'helloo',
//         price: 5000,
//         description: 'software engineering',
//         location: 'GUC'
//     });
//     const allmaster=  await axios.get('http://localhost:3000/api/masterclasses')
//     return allmaster.data
// },
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


updateMasterY: async (id,req) => {

    try{

    await axios.put('http://localhost:3000/api/masterclasses/'+id,req)

    const upd = await axios.get('http://localhost:3000/api/masterclasses/'+id)

    return upd

    }

    catch(err){

        return "error"

    }

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
    }




}
module.exports = functions;