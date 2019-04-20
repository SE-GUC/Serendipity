

const axios = require('axios');
const Course = require("./models/Course");

const mongoose = require("mongoose");

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

},


// mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
//     useNewUrlParser: true
//   })
  /////Courses///////////////////////////
  updateCourse: async (id, req) => {
    try {
     // const path = "http://localhost:5000/api/courses/" + id;
      await axios.put("http://localhost:5000/api/courses/" + id, req);
      const course = await axios.get("http://localhost:5000/api/courses/"+id);
    return course
      //return 
    } catch (err) {
      return "error";
    }
  },
  ///
  createCourse: async req => {
    try {
      return await axios.post("http://localhost:5000/api/courses/", req);
    } catch (err) {
      return "error";
    }
  },
  applyForCourse: async (cid, mid) => {
    const path = "http://localhost:5000/api/courses/" + cid + "/apply";
    return await axios.put(path, { applicantId: '"' + mid + '" ' });
  },
  getCourse: async () => {
    const course = await axios.get("http://localhost:5000/api/courses/");
    return course;
  },
  getCourses: async id => {
    const course = await axios.get("http://localhost:5000/api/courses/" + id);
    return course;
  },
  deleteCourse: async id => {
    await axios
      .delete("http://localhost:5000/api/courses/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },
  ////////Workshops//////////////////////
updateWorkshop: async (id, req) => {
  try {
   // const path = "http://localhost:5000/api/courses/" + id;
    await axios.put("http://localhost:5000/api/workshops/" + id, req);
    const workshop = await axios.get("http://localhost:5000/api/workshops/"+id);
  return workshop
    //return 
  } catch (err) {
    return "error";
  }
},
//
createWorkshop: async(req) =>{
    try{
    return await axios.post('http://localhost:5000/api/workshops/',req)
    }
    catch(err){
        return "error"
    }
},
applyForWorkshop: async(cid,mid) =>{
    const path = 'http://localhost:5000/api/workshops/'+cid+'/apply'
    return await axios.put(path,{"applicantId" : "\""+mid+"\" "} )
},
getWorkshop: async () => {
    const workshop= await axios.get('http://localhost:5000/api/workshops/')
    return workshop
},
getWorkshops: async (id) => {
    const workshop = await axios.get('http://localhost:5000/api/workshops/'+id)
    return workshop
},
deleteWorkshop: async (id) => {
   await axios.delete('http://localhost:5000/api/workshops/'+id)
   .then(res => res.data)
   .catch(e=>'error')
} ,
  //////////////////Jobs/////////////////////////
  getJobs: async () => {
    const jobs = await axios.get("http://localhost:5000/api/jobs/");
    return jobs;
  },
  getJob: async id => {
    const job = await axios.get("http://localhost:5000/api/jobs/" + id);
    return job;
  },
  updateJob: async (id, data) => {
    await axios
      .put("http://localhost:5000/api/jobs/" + id, data)
      .then(res => res.data)
      .catch(e => "error");
  },
  createJob: async data => {
    await axios
      .post("http://localhost:5000/api/jobs/", data)
      .then(res => res.data)
      .catch(e => "error");
  },
  deleteJob: async id => {
    await axios
      .delete("http://localhost:5000/api/jobs/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },
  //   deleteJob: async id => {
  //     await axios
  //       .delete("http://localhost:5000/api/jobs/"+id)
  //       .then(res => res.data)
  //       .catch(e => "error");
  //   },

  ////////////////////Educational Organizations///////////////

  //1. get all
  getEduOrg: async () => {
    const educationalOrganizations = await axios.get(
      "http://localhost:5000/api/educationalOrganizations/"
    );
    return educationalOrganizations;
  },
  //2.get by id
  getEduOrgById: async id => {
    const educationalOrganizations = await axios.get(
      "http://localhost:5000/api/educationalOrganizations/" + id
    );
    return educationalOrganizations;
  },

  //3.create
  createEduOrg: async data => {
    await axios
      .post("http://localhost:5000/api/educationalOrganizations/", data)
      .then(res => res.data)
      .catch(e => "error");
  },
  //4.delete
  deleteEduOrg: async id => {
    await axios
      .delete("http://localhost:5000/api/educationalOrganizations/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },
  //5.update
  updateEduOrg: async (id, data) => {
    await axios
      .put("http://localhost:5000/api/educationalOrganizations/" + id, data)
      .then(res => res.data)
      .catch(e => "error");
  },
  // ////////////////Partners

  getPartners: async () => {
    const partners = await axios.get("http://localhost:5000/api/partners/");
    return partners;
  },
  getPartner: async id => {
    const partner = await axios.get("http://localhost:5000/api/partners/" + id);
    return partner;
  },
  createPartner: async data => {
    await axios
      .post("http://localhost:5000/api/partners/", data)
      .then(res => res.data)
      .catch(e => "error");
    //console.log("in create partner fn");
  },
  updatePartner: async (id, data) => {
    await axios
      .put("http://localhost:5000/api/partners/" + id, data)
      .then(res => res.data)
      .catch(e => "error");
  },
  deletePartner: async id => {
    await axios
      .delete("http://localhost:5000/api/partners/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },

  //////////////////Masterclasses///////////

  // default: async => {
  //   return axios.get(`http://localhost:5000/api/masterclasses`);
  // },
  createMaster: async data => {
    return await axios.post(`http://localhost:5000/api/masterclasses/`, data);
  },
  readMaster: async id => {
    return await axios.get(`http://localhost:5000/api/masterclasses/${id}`);
  },
  deleteMaster: async id => {
    return await axios.delete(`http://localhost:5000/api/masterclasses/${id}`);
  },
  updateMaster: async (id, data) => {
    return await axios.put(`http://localhost:5000/api/masterclasses/${id}`, data);
  },

  getmasters: async () => {
    const masters = await axios.get("http://localhost:5000/api/masterclasses/");
    return masters;
  },
  createMasterM: async data => {
   await  axios
      .post("http://localhost:5000/api/masterclasses/", data)
      .then(res => res.data)
      .catch(e => "error");
  },
  updateMasterM: async (id, data) => {
    // axios
    //   .put("http://localhost:5000/api/masterclasses/${id}", data)
    //   .then(res => res.data)
    //   .catch(e => "error");

    await axios
      .put("http://localhost:5000/api/masterclasses/" + id, data)
      .then(res => res.data)
      .catch(e => "error");
  },
  deleteMasterM: async id => {
    await axios
      .delete("http://localhost:5000/api/masterclasses/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },
  getMasterM: async id => {
    const partner = await axios.get(
      "http://localhost:5000/api/masterclasses/" + id
    );
    return partner;
  },

  /////////////Admins///////////////////////
  getAdmins: async () => {
    const admins = await axios.get("http://localhost:5000/api/admins/");
    return admins;
  },
  getAdmin: async id => {
    const admin = await axios.get("http://localhost:5000/api/admins/" + id);
    return admin;
  },
  updateAdmin: async (id, data) => {
    //console.log("10")
    await axios
      .put("http://localhost:5000/api/admins/" + id, data)
      .then(res => res.data)
      .catch(e => "error");
    //console.log("11")
  },
  createAdmin: async data => {
    await axios
      .post("http://localhost:5000/api/admins/", data)
      .then(res => res.data)
      .catch(e => "error");
  },
  deleteAdmin: async id => {
    await axios
      .delete("http://localhost:5000/api/admins/" + id)
      .then(res => res.data)
      .catch(e => "error");
  },

  getAllWorkshops: async id=>{
  
    const e = await axios.get("http://localhost:5000/api/educationalOrganizations/" + id);
    console.log(e.data.name+"salmasalmasalma")
   const res2 = await axios.get("http://localhost:5000/api/workshops/");
    const l = res2.data.data.length
    var a = []
    
    for (let i = 0; i < l; i++) {
        const element = res2.data.data[i].eduOrganisation
        
        if(element===e.data.name){
            a.push(res2.data.data[i])
            console.log(res2.data.data[i].eduOrganisation)
            console.log(a[0]+'daren')
        }
        
    }
   
    return a;
  },

  getAllCourses: async id=>{
  
    const e = await axios.get("http://localhost:5000/api/educationalOrganizations/" + id);
    console.log(e.data.name+"salmasalmasalma")
   const res2 = await axios.get("http://localhost:5000/api/courses/");
    const l = res2.data.data.length
    var a = []
    
    for (let i = 0; i < l; i++) {
        const element = res2.data.data[i].eduOrganisation
        
        if(element===e.data.name){
            a.push(res2.data.data[i])
            console.log(res2.data.data[i].eduOrganisation)
            console.log(a[0]+'daren')
        }
        
    }
   
    return a;
  },

  getAllMasterclasses: async id=>{
  
    const e = await axios.get("http://localhost:5000/api/educationalOrganizations/" + id);
    console.log(e.data.name+"salmasalmasalma")
   const res2 = await axios.get("http://localhost:5000/api/masterclasses/");
   console.log(res2.data.id+"sassaaaaaaaaaaaaaaaaaaaaaaaaaaadddd")
    const l = res2.data.data.length
    console.log(res2.data.data.id+"sassaaaaaaaaaaaaaaaaaaaaaaaaaaa")

    var a = []
    
    for (let i = 0; i < l; i++) {
        const element = res2.data.data[i].Eduorganization
        
        if(element===e.data.name){
            a.push(res2.data.data[i])
            console.log(res2.data.data[i].Eduorganization)
            console.log(a[0]+'daren')
        }
        
    }
   
    return a;
  },





/////Assessments/////////
getAssessments: async () => {
  const assessment = await axios.get("http://localhost:5000/api/assessments/");
  return assessment;
},
getAssessment: async id => {
  const assessment = await axios.get("http://localhost:5000/api/assessments/" + id);
  return assessment;
},
createAssessment: async data => {
  await axios
    .post("http://localhost:5000/api/assessments/", data)
    .then(res => res.data)
    .catch(e => "error");
  //console.log("in create partner fn");
},
updateAssessment: async (id, data) => {
  await axios
    .put("http://localhost:5000/api/assessments/" + id, data)
    .then(res => res.data)
    .catch(e => "error");
},
deleteAssessment: async id => {
  await axios
    .delete("http://localhost:5000/api/assessments/" + id)
    .then(res => res.data)
    .catch(e => "error");
}
}

module.exports = functions;
