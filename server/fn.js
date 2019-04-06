const axios = require('axios')

const functions = {
    defualt: async => { return axios.get('http://localhost:3000/api/assessments')  },

    readAssessment: async(id) => { return axios.get('http://localhost:3000/api/assessments/${id}') },

    createAssessment: async(data) => { return axios.post('http://localhost:3000/api/assessments/', data) },

    deleteAssessment: async(id) => { return axios.delete('http://localhost:3000/api/assessments/${id}') },

    updateAssessment: async(id, data) => { return axios.put('http://localhost:3000/api/assessments/${id}', data) },

    getAssessments: async() => {
        const assessments= axios.get('http://localhost:3000/api/assessments/')
        return assessments
    },

    createAssess: async(data) => {
        axios.post('http://localhost:3000/api/assessments/', data).then (res => res.data).catch( e => 'Error')
    },

    updateAssess: async(id, data) => {
        axios.put('http://localhost:3000/api/assessments/${id}', data).then (res => res.data).catch ( e => 'Error')
        axios.put('http://localhost:3000/api/assessments/'+id,data).then(res => res.data).catch (e=>'Error')
    },

    deleteAssess: async(id) => {
        axios.delete('http://localhost:3000/api/assessments/${id}').then(res => res.data).catch (e=>'error')
        axios.delete('http://localhost:3000/api/assessments/'+id).then(res => res.data).catch (e=>'error')
    },

    getAssess: async (id) => {
        const mem = axios.get('http://localhost:3000/api/assessments/' + id)
        return mem
    }
}

module.exports = functions;