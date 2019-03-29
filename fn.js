const axios = require('axios');

const functions = {
        add : (x,y)=> x+y,
        getCourse : async () => {
            const result = null;  
            console.log("ahooq")
            await axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => {result = res.data}).catch(e=>{return'error'})
            return result;
        },
        getUser: async () => {
            const user = await axios.get('https://localhost:3000/api/courses')
            return user
            }
        
};
module.exports = functions;

// axios.get('http://localhost:3000/api/courses/5c94a002678bbd09f2e86cb7').then(res => {console.log(res);res.data}).catch(e=>{'error'})
                