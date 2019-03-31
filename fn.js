const axios = require('axios');

const functions = {
getMemberByID : async(id) =>{
   try {
    const member=  await axios.get('http://localhost:3000/api/members/'+id)
    return member
}
catch(err){
    return "error"
}
},
createMember : async(req)=>{
    try{
   return await axios.post('http://localhost:3000/api/members/',req) 

    }
    catch(err){
        return "error"
    }
},

updateMember : async ( id , req)=>{
   try {
    await axios.put('http://localhost:3000/api/members/'+id , req )
    const updated = await axios.get('http://localhost:3000/api/courses/'+id)
    return updated
    }catch(e) {
        return e
    }
},

deleteMember : async (id)=>{

return await axios.delete('http://localhost:3000/api/members/'+id)

}


};
module.exports = functions;