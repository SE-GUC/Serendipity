const axios = require('axios');
const functions = {
   
    getJobs: async () => {
        const jobs= axios.get('http://localhost:3000/api/jobs/')
        return jobs
    },
    getJob: async (id) => {
        const job = axios.get('http://localhost:3000/api/jobs/${id}')
        return job
    },
    updateJob: async (id,data) => {
        axios.put('http://localhost:3000/api/jobs/${id}',data).then(res => res.data).catch(e=>'error')
    },
    createJob: async (data) => {
       axios.post('http://localhost:3000/api/jobs/',data).then(res => res.data).catch(e=>'error')
    },
    deleteJob: async (id) => {
        axios.delete('http://localhost:3000/api/jobs/'+id).then(res => res.data).catch(e=>'error')
    }
};


module.exports = functions;