const axios = require('axios');
//const Workshop = require('../../models/Workshop')

const functions = {
updateWorkshop: async() =>{
   const newwks= await Workshop.update(
        { _id: "5c9e968d78f9b35e1c0afd11"}, 
        { eduOrganisation:'GQA' }
        //done
   );
    // const NewWKS =await Workshop.update( 
    // {
    // eduOrganisation:'GQA'
    
    // });
    const allWKS=  await axios.get('http://localhost:3000/api/workshops/')
    return allWKS.data
}
};
module.exports = functions;



