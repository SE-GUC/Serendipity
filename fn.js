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
 makeid (length)  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
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
   return await axios.put('http://localhost:3000/api/members/'+id , req )
    
    }catch(e) {
        return e
    }
},

deleteMember : async (id)=>{

return await axios.delete('http://localhost:3000/api/members/'+id)

}


};
module.exports = functions;