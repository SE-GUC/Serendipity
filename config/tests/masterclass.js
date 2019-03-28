const axios=require('axios')

const masterClass={
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
        return axios.delete(`http://localhost:3000/api/masterclasses${id}`)
    },
    updateMaster: async(id,data) =>{
        return axios.put(`http://localhost:3000/api/masterclasses${id}`,data)
    }
}
module.exports= masterClass