<<<<<<< HEAD:server/test.js
const funcs = require('./fn');
const Course = require("./models/Course");
const Workshop = require("./models/Workshop");
const mongoose = require("mongoose");
const Assessment = require('./models/Assessment');
const Masterclass = require("./models/Masterclass");
jest.setTimeout(10000000)
//works
test("testing that get all works for assessments", async () => {
  expect.assertions(6);
  const response1 = await funcs.getAssessments();
  const data = { memberName: "Reem",
  expertName: "Aysha",
  educationalOrg:"GUC",
  phoneNumber: "1234567",
  daysAvailable: "sunday, monday, tuesday"}
  console.log("in 1st a")
  await funcs.createAssessment(data)
  const response = await funcs.getAssessments();
  const l = response1.data.data.length + 1;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].memberName).toEqual("Reem");
  expect(response.data.data[l - 1].expertName).toEqual("Aysha");
  expect(response.data.data[l - 1].educationalOrg).toEqual("GUC");
  expect(response.data.data[l - 1].phoneNumber).toEqual("1234567");
  expect(response.data.data[l - 1].daysAvailable).toEqual("sunday, monday, tuesday");
  console.log("in 1st a done")
});
//works
test("testing that get works for assessments", async () => {
  expect.assertions(5);
  console.log("in 2 a")
  const data = {memberName: "Reem",
  expertName: "Aysha",
  educationalOrg:"GUC",
  phoneNumber: "1234567",
  daysAvailable: "sunday, monday, tuesday"}

  await funcs.createAssessment(data)
  console.log("after 2 a create")
  const response = await funcs.getAssessments();
  console.log(response.data.data)
  const l = response.data.data.length;
  const id =response.data.data[l - 1]._id;
  console.log(id);
  const response1 = await funcs.getAssessment(id);
  expect(response1.data.memberName).toEqual("Reem");
  expect(response1.data.expertName).toEqual("Aysha");
  expect(response1.data.educationalOrg).toEqual("GUC");
  expect(response1.data.phoneNumber).toEqual("1234567");
  expect(response1.data.daysAvailable).toEqual("sunday, monday, tuesday");
  console.log("in 2 a s")
});
//works
test("testing that create works for assessments", async () => {
  expect.assertions(5);
  const l = (await funcs.getAssessments()).data.data.length;
  const data = {memberName: "Reem Ali",
  expertName: "Aysha El-Safty",
  educationalOrg:"GUC-",
  phoneNumber: "12345679",
  daysAvailable: "sunday, monday, tuesdayyyy"}

  await funcs.createAssessment(data)
  const response = await funcs.getAssessments();
  expect(response.data.data[l].memberName).toEqual("Reem Ali");
  expect(response.data.data[l].expertName).toEqual("Aysha El-Safty");
  expect(response.data.data[l].educationalOrg).toEqual("GUC-");
  expect(response.data.data[l].phoneNumber).toEqual("12345679");
  expect(response.data.data[l].daysAvailable).toEqual("sunday, monday, tuesdayyyy");
});
//pending
test("testing that update works for assessments", async () => {
  expect.assertions(2);
  const data = {memberName: "Reem Ali",
  expertName: "Aysha El-Safty",
  educationalOrg:"GUC-",
  phoneNumber: "12345679",
  daysAvailable: "sunday, monday, tuesdayyyy"}

  await funcs.createAssessment(data)
  const response = await funcs.getAssessments();
  const l = response.data.data.length;
  const data2 = {memberName: "Reem",
  expertName: "Slim"}
  await funcs.updateAssessment(response.data.data[l - 1]._id, data2);
  const response2 = await funcs.getAssessments();
  const l2 = response2.data.data.length;
  expect(response2.data.data[l2 - 1].memberName).toEqual("Reem");
  expect(response2.data.data[l2 - 1].expertName).toEqual("Slim");
});

test("testing that delete works for assessments", async () => {
  expect.assertions(1);
  const data = {memberName: "Reem Ali",
  expertName: "Aysha El-Safty",
  educationalOrg:"GUC-",
  phoneNumber: "12345679",
  daysAvailable: "sunday, monday, tuesdayyyy"}

  await funcs.createAssessment(data)
  const response = await funcs.getAssessments();
  const l = response.data.data.length;
  await funcs.deleteAssessment(response.data.data[l - 1]._id);
  const response2 = await funcs.getAssessments();
  expect(response2.data.data[l - 1]).toEqual(undefined);
});


test("testing that update doesnt work with wrong data for assessments", async () => {
  expect.assertions(4);
  const data={memberName: "Reem Ali",
  expertName: "Aysha El-Safty",
  educationalOrg:"GUC-",
  phoneNumber: "12345679",
  daysAvailable: "sunday, monday, tuesdayyyy"}
  await funcs.createAssessment(data);
  const response = await funcs.getAssessments();
  const l = response.data.data.length;
  await funcs.updateAssessment(response.data.data[l - 1]._id, {
    memberName: "Reem",
    educationalOrg: "GUC"
  });
  const response2 = await funcs.getAssessments();
  expect(response2.data.data[l - 1].memberName).toEqual("Reem");
  expect(response2.data.data[l - 1].expertName).toEqual("Aysha El-Safty");
  expect(response2.data.data[l - 1].educationalOrg).toEqual("GUC");
  expect(response2.data.data[l - 1].phoneNumber).toEqual("12345679");


  console.log("finished testing assessments");
});

////////////////////////////////////////////////////////////////////////////
// ///Tests for Assesments////
// // test("Read that an assessment exists",async()=>{
// //     expect.assertions(1)
// //     return expect(typeof(funcs.readMaster)).toBe('function')
// // })
// //pending
//  test("Read by id that an assessment exists",async()=>{
//     data={
//         memberName: "Reem",
//         expertName: "Aysha",
//         educationalOrg:"GUC",
//         phoneNumber: "1234567",
//         daysAvailable: "sunday, monday, tuesday"
//         }
//         console.log("here assesm")
//     const create=await funcs.createAssessment(data)
//     const assessment= create.data.data
//     console.log(assessment)
//     const id=assessment["_id"]
//     console.log(id)
//     const read=await funcs.readAssessment(id)
//     console.log(read.data)
//     const readAssessment=read.data
//     console.log(readAssessment)
//     expect.assertions(1)
//     return expect(readAssessment).toEqual(assessment)
// })

// // test("Delete an existing assessment",async()=>{
// //     expect.assertions(1)
// //     return expect(typeof(funcs.deleteAssessment)).toBe('function')
// // })

// test("Delete an existing assessment by id",async()=>{
//     data={
//         memberName: "Reem",
//         expertName: "Aysha",
//         educationalOrg:"GUC",
//         phoneNumber: "1234567",
//         daysAvailable: "sunday, monday, tuesday"
//         }
//     const create=await funcs.createAssessment(data)
//     const assessment= create.data.data
//     console.log(assessment)
//     const id=assessment["_id"]
//     console.log(id)
//     const read=await funcs.deleteAssessment(id)
//     console.log(read.data)
//     const readAssessment=read.data
//     console.log(readAssessment)  
//     expect.assertions(1)
//     return expect(readAssessment).toEqual(assessment)
// })



// test('testing that get all works', async () => {
//     expect.assertions(7)
//     const response1 =  await funcs.getAssessments()
//     await funcs.createAssess(
//         {
//           memberName: "Reem",
//           expertName: "Aysha",
//           educationalOrg:"GUC",
//           phoneNumber: "1234567",
//           daysAvailable: "sunday, monday, tuesday"
          

//         })  
 
//     const response =  await funcs.getAssessments()
//   const l = response1.data.data.length+1 
//     expect(response.data.data.length).toBe(l)
//     expect(response.data.data[l-1].memberName).toEqual('Reem')
//     expect(response.data.data[l-1].expertName).toEqual('Aysha')
//     expect(response.data.data[l-1].educationalOrg).toEqual('GUC')
//     expect(response.data.data[l-1].phoneNumber).toEqual("1234567")
//     expect(response.data.data[l-1].daysAvailable).toEqual('sunday, monday, tuesday')
//     expect(response.data.data[l-1].location).toEqual('GUC')
//     });

// test("Create an Assessment exists",async()=>{
//     expect.assertions(1)
//     return expect(typeof(funcs.createAssessment)).toBe('function')
// })

//  test("Create an Assessment",async()=>{
//     data={
//       memberName: "Ali",
//       expertName: "Slim",
//       educationalOrg:"GUC",
//       phoneNumber: "123456",
//       daysAvailable: "sunday, thursday"
//         }
//     const createdAssessment=await funcs.createAssessment(data)
//     const assessment= createdAssessment.data.data
//     const id=assessment["_id"]
//     return expect(assessment).toMatchObject(data)
// })

// test('Testing that create works for Assessment', async () => {
//     expect.assertions(6)
//     const l = (await funcs.getAssessments()).data.data.length
//     await funcs.createAssess({
//       memberName: "Ahmad",
//       expertName: "Mervat",
//       educationalOrg:"GUC",
//       phoneNumber: "123456",
//       daysAvailable: "saturday"
//         })  
//     const response =  await funcs.getAssessments()

//     expect(response.data.data[l].memberName).toEqual('Ahmad')
//     expect(response.data.data[l].expertName).toEqual('Mervat')
//     expect(response.data.data[l].educationalOrg).toEqual('GUC')
//     expect(response.data.data[l].phoneNumber).toEqual("123456")
//     expect(response.data.data[l].daysAvailable).toEqual('saturday')
//     expect(response.data.data[l].location).toEqual('GUC')
//     })

//     test('Testing that an update works for Assessment', async ()=>{
//         expect.assertions(6)
//         await funcs.createAssess({
//           memberName: "Ahmad",
//           expertName: "Mervat",
//           educationalOrg:"GUC",
//           phoneNumber: "223456",
//           daysAvailable: "saturday, sunday, monday"
//            })  
//         const response =  await funcs.getAssessments()
//         const l = response.data.data.length
//         await funcs.updateAssess(response.data.data[l-1]._id,{
//           memberName: "Ahmad Ali",
//           expertName: "Mervat Abo-ElKheer",
//           educationalOrg:"GUCB",
//           phoneNumber: "2223456",
//           daysAvailable: "saturday, thursday, friday"
//            })
//         const response2 =  await funcs.getAssessments()
//         const l2 =  response2.data.data.length
//         expect(response2.data.data[l2-1].memberName).toEqual('Ahmad Ali')
//         expect(response2.data.data[l2-1].expertName).toEqual('Mervat Abo-ElKheer')
//         expect(response2.data.data[l2-1].educationalOrg).toEqual('GUCB')
//         expect(response2.data.data[l2-1].phoneNumber).toEqual("2223456")
//         expect(response2.data.data[l2-1].daysAvailable).toEqual('saturday, thursday, friday')
//       })
// /////////////////////////////////////////
//       test('Testing that update does not work with wrong data for Assessment', async ()=>{
//         expect.assertions(6)

//         await funcs.createAssess({
//           memberName: "Ahmad",
//           expertName: "Mervat",
//           educationalOrg:"GUC",
//           phoneNumber: "123456",
//           daysAvailable: "saturday, sunday, monday"
//            })  
//         const response =  await funcs.getAssessments()
//         const l = response.data.data.length
//         await funcs.updateAssess(response.data.data[l-1]._id,{
//            memberName: 'Ahmad ten',
//            expertName: 'Slim',
//            phoneNumber: "1245" 
//            })
//         const response2 =  await funcs.getAssessments()
//         expect(response2.data.data[l-1].memberName).toEqual('Ahmad')    
//         expect(response2.data.data[l-1].expertName).toEqual('Aysha')
//         expect(response2.data.data[l-1].educationalOrg).toEqual('GUC')
//         expect(response2.data.data[l-1].phoneNumber).toEqual("12452")
//         expect(response2.data.data[l-1].daysAvailable).toEqual('saturday, sunday, monday')
//       })


//       test('Testing that delete works for assessments', async ()=>{
//         expect.assertions(1)
//         await funcs.createAssess({
//           memberName: "Ali",
//           expertName: "Slim",
//           educationalOrg:"GUC",
//           phoneNumber: "123456",
//           daysAvailable: "sunday, thursday"
//            }) 

//         const response =  await funcs.getAssessments()
//         const l = response.data.data.length
//         await funcs.deleteAssess(response.data.data[l-1]._id)
//         const response2 =  await funcs.getAssessments()
//         expect(response2.data.data[l-1]).toEqual(undefined)
//       })

//        test('Testing that get works for assessments', async () => {
//         expect.assertions(6)
//        await funcs.createAssess( {
//           memberName: "Ali",
//           expertName: "Slim",
//           educationalOrg:"GUC",
//           phoneNumber: "123456",
//           daysAvailable: "sunday, thursday"

//         })  
//        const response =  await funcs.getAssessments()
//        const l = response.data.data.length
//         const response1 =  await funcs.getAssessments(response.data.data[l-1]._id)
//         expect(response1.data.data.memberName).toEqual('Ali')
//         expect(response1.data.data.expertName).toEqual('Slim')
//         expect(response1.data.data.phoneNumber).toEqual("123456")
//         expect(response1.data.data.daysAvailable).toEqual("sunday, thursday")
//         expect(response1.data.data.educationalOrg).toEqual('GUC')
//        });

 


=======

const funcs = require('./fn');
const Member = require('./models/Member')

const Course = require("./models/Course");
const Workshop = require("./models/Workshop");
const mongoose = require("mongoose");
jest.setTimeout(10000000);
//jest.setTimeout(1000000);

beforeAll(async () => {
    const name = funcs.makeid(5) ;
    await new Member({
      _id: mongoose.Types.ObjectId(),
      skills: [
        "presentations"
    ],
    userName: name,
    password: name+"!@123",
    availableDailyHours: 8,
    name: name,
    email: name+"@gmail.com",
    birthDate: "2030-02-10T00:00:00.000Z",
    location: "Cairo"
    }).save();
    return "one added"
});


//test getMemberbyID passes
test(`Get username of a given ID`, async () => {
    expect.assertions(1);  //this depends on how many expect I am using
    const member = await Member.findOne({})
    const username = member.userName
    const response =  await funcs.getMemberByID(member._id);
    //console.log(response)
    expect(response.data.data.userName).toEqual(username)
});


// create a new member passes
test('create a new member' , async() => {
    const newmembername = funcs.makeid(5) ;
     expect.assertions(3);
     const req ={
         "skills": ["finance"],
        "userName": newmembername,
         "availableDailyHours": 8,
         "name": newmembername,
         password : newmembername+"@!1235",
         "location": "Nasr city",
         "email": newmembername+"@gmaail.com",
         "birthDate": "1990-08-10T22:00:00.000Z"
}
    const members = await Member.find();
  const newmember =  await funcs.createMember(req)
 // console.log(newmember)
    const newmembers = await Member.find()
    expect( newmembers.length - members.length).toEqual(1);
    expect ( newmember.data.data.userName).toEqual(newmembername)
    expect ( newmember.data.data.email).toEqual(newmembername+"@gmaail.com")
   
});



// update a member
test ('update member' , async() => {
expect.assertions(1);
const member = await Member.findOne({});
const id = member._id
//console.log(id)
const updated = await funcs.updateMember(id, {'name' : 'updated name again'});
//console.log(updated.data.name)
const upd = await Member.findById(id)
//console.log(upd.name)
expect(upd.name).toEqual("updated name again")
});


 //delete 
test ('delete a member', async ()=>{
    try{
expect.assertions(2);
const member = Member.findOne({});
const id = member.id ;
const members = await Member.find();
const deleted = await funcs.deleteMember(id)
const newmembers = await Member.find();
expect( members.length - newmembers.length).toEqual(1);
expect( deleted.data.data.id).toBe(id)
}
catch(e){
console.log(e)
}
});
>>>>>>> 800a1d9ad523a66b78bae13e1de934b0b85e0ea6:server/test.js

///////Updated Courses/////////10 Tests

////pending--edited y working
test('Course:create course', async() =>{
  expect.assertions(1);
  const schema = {
      "title": "Course1",
      "eduOrganisation": "Nasa",
      "duration": 4,
      "educator": "slim",
      "price": 300000000,
      "description": "quite popular",
      "location": "Las Vegas"
  };
  console.log("after schema")
  //const bef = await Course.find(schema)
  const bef =await funcs.getCourse()
  console.log("after bef")
  console.log(bef.data.data.length)
  //console.log(bef)
  await funcs.createCourse(schema)
  console.log("after creat course")
  //const aft = await Course.find(schema)
  const aft=await funcs.getCourse()
  console.log(aft.data.data.length)
  expect(aft.data.data.length - bef.data.data.length).toBe(1);  
})

//Edited it now works!!
test('Course:create course does not work with incorrect data', async() =>{
  expect.assertions(1);
  const schema = {
      "title": "Course1",
      "eduOrganisation": "Nasa",
      "duration": 4,
      "educator1": "slim",
      "price": 300000000,
      "description": "quite popular",
      "location": "Las Vegas"
  };
//const bef = await Course.find(schema)
const res = await funcs.createCourse(schema)
//const aft = await Course.find(schema)
//expect(aft.length - bef.length).toBe(0);
expect(res).toEqual("error")  
console.log("finished create course does not work incorrect data")
})

//slowwwww! takes forever!! -> edited works !!!!
test('update a course uncomplete data',async() => {
  expect.assertions(1);
  console.log("update course uncomplete data1")
  //const aCourse = await Course.findOne();
  //const aCourse = await Course.find().limit(1);
  const Courses= await funcs.getCourse()
  //console.log(Courses.data.data[0])
  const length=(Courses.data.data.length)-1
  console.log(length)
  const aCourse=Courses.data.data[Math.floor(Math.random()*length)] //get random tuple to update
  console.log(aCourse)
  console.log("update course uncomplete data2")
  const id = aCourse._id;
  console.log(id)
  const response = await funcs.updateCourse(id,{'title':'yasyas'});
  
  console.log(response.data.data.title)
  console.log("update course uncomplete data3")
  expect(response.data.data.title).toEqual('yasyas')
  console.log("update course uncomplete data4")
})
// // --pending
test('update a course full data',async() => {
  expect.assertions(6);
  console.log("update workshop")
  const schema = {
      "applicants"  :[],
      "title":  "cat",
      "duration": 4,
      "educator": "m3lem",
      "price":  3000,
      "description":  "quite popular",
      "location": "Cairo"
  }
  console.log(schema)
  // const aCourse = await Course.findOne();
  const Courses = await funcs.getCourse();
  const length=(Courses.data.data.length)-1
  console.log(length)
  const aCourse=Courses.data.data[Math.floor(Math.random()*length)] //gets random data to update
  //const aCourse = Courses.data.data[0]; //gets first one
  //console.log(aCourse)
  const id = aCourse._id;
  const response = await funcs.updateCourse(id,schema);
  console.log("here after update")
  //expect(response.applicants.length).toBe(0)
  expect(response.data.data.title).toEqual(schema.title)
  expect(response.data.data.duration).toEqual(schema.duration)
  expect(response.data.data.educator).toEqual(schema.educator)
  expect(response.data.data.price).toEqual(schema.price)
  expect(response.data.data.description).toEqual(schema.description)
  expect(response.data.data.location).toEqual(schema.location)
})
////works
test('update a course does not work with wrong data',async() => {
  expect.assertions(1);
  const schema = {
      "applicants"  :[],
      "name": "ali",
      "duration": 4,
      "educator": "m3lem",
      "price":  3000,
      "description":  "quite popular",
      "location": "Cairo"
  };
  const aCourse = await funcs.getCourse();
  const id = aCourse._id;
  const response = await funcs.updateCourse(id,schema);
  expect(response).toEqual("error")
})
////

//works
test("Course:testing that get all works Course", async () => {
  expect.assertions(5);
  const response1 = await funcs.getCourse();
  //console.log(response1)
  await funcs.createCourse({
    title: "a",
    eduOrganisation: "aaa",
    educator: "a1",
    price: 2
  });
  const response = await funcs.getCourse();
  const l = 1 + response1.data.data.length;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].title).toEqual("a");
  expect(response.data.data[l - 1].eduOrganisation).toEqual("aaa");
  expect(response.data.data[l - 1].educator).toEqual("a1");
  expect(response.data.data[l - 1].price).toEqual(2);
  console.log("finished course get all works");
});
///////
//works
test("Course:Test getting a certain course ", async () => {
  try {
    expect.assertions(6);
    //creating a lawyer for testing
    //await funcs.CreateReviewerOrLawyer('Lawyer','Ali el seba3y','male','Egyptian','national id','A6123456778','1998-12-10T00:00:00.000Z','Maadi','ali@yahoo.com','123456788')
    await funcs.createCourse({
      title: "a",
      eduOrganisation: "aaa",
      educator: "a1",
      price: 2
    });
    const res = await funcs.getCourse();
    expect(res.data).toBeDefined();
    expect(res.status).toEqual(200);

    const res2 = await funcs.getCourses(
      res.data.data[res.data.data.length - 1]._id
    );
    console.log(res2.data);

    expect(res2.data.data.title).toEqual("a");
    expect(res2.data.data.eduOrganisation).toEqual("aaa");
    expect(res2.data.data.educator).toEqual("a1");
    expect(res2.data.data.price).toEqual(2);
  } catch (error) {
    console.log(error);
  }
});
////works
test('Course:testing that get by id does not work works', async () => {
  expect.assertions(1)
  expect(await funcs.getCourses('bbllaabbllaa').status).toEqual(undefined);
}),
//works
test('Course:testing that get by id does not work works', async () => {
  expect.assertions(1)
  expect(await funcs.deleteCourse('bbllaabbllaa').status).toEqual(undefined);

}),
//works
test('Course:testing that delete works for course', async ()=>{
  expect.assertions(1) 
  const response =  await funcs.getCourse()
  const did = response.data.data[0]._id;
  await funcs.deleteCourse(did)
  const response2 =  await funcs.getCourses(did)
  expect(Object.keys(response2.data)).toEqual(['error'])
});


///////////////////Workshop/////////////////////////
//edited ->works!!
test('create Workshop', async() =>{
  expect.assertions(1);
  const schema = {
      "title": "Course1",
      "eduOrganisation": "Nasa",
      "duration": 4,
      "educator": "slim",
      "price": 300000000,
      "description": "quite popular",
      "location": "Las Vegas"
  };
  const bef = await funcs.getWorkshop()
  await funcs.createWorkshop(schema)
  const aft = await funcs.getWorkshop()
  console.log("creat workshop")
  expect(aft.data.data.length - bef.data.data.length).toBe(1);  
})
//edited -> works
test('create course does not work with incorrect data', async() =>{
  expect.assertions(2);
  const schema = {
      "title": "Course1",
      "eduOrganisation": "Nasa",
      "duration": 4,
      "educator1": "slim",
      "price": 300000000,
      "description": "quite popular",
      "location": "Las Vegas"
  };
const bef = await funcs.getWorkshop()
const res = await funcs.createWorkshop(schema)
const aft = await funcs.getWorkshop()
expect(aft.data.data.length - bef.data.data.length).toBe(0);
expect(res).toEqual("error")  
})
//edited -> working!
test('update a Workshop uncomplete data',async() => {
  expect.assertions(1);
  //const aWorkshop = await Workshop.findOne();
  const Workshops= await funcs.getWorkshop()
  console.log("update workshop uncomplete data1")
  const length=(Workshops.data.data.length)-1
  console.log(length)
  const aWorkshop=Workshops.data.data[Math.floor(Math.random()*length)] //get random tuple to update
  console.log(aWorkshop)
  console.log("update workshop uncomplete data2")
  const id = aWorkshop._id;
  console.log(id)
  const response = await funcs.updateWorkshop(id,{'title':'yasyas'});
  console.log(response.data.data.title)
  expect(response.data.data.title).toEqual('yasyas')
  console.log("update workshop uncomplete data4")
})
//edited->works
test('update a workshop full data',async() => {
  expect.assertions(6);
  console.log("update workshop")
  const schema = {
      "title":  "cat",
      "duration": 4,
      "educator": "m3lem",
      "price":  3000,
      "description":  "quite popular",
      "location": "Cairo"
  }
  //console.log(schema)
  const Workshops = await funcs.getWorkshop();
  const length=(Workshops.data.data.length)-1
  //console.log(length)
  const aWorkshop=Workshops.data.data[Math.floor(Math.random()*length)] //gets random data to update
  //const aWorkshop = Workshops.data.data[0]; //gets first one
  //console.log(aWorkshop)
  const id = aWorkshop._id;
  const response = await funcs.updateWorkshop(id,schema);
  //console.log("here after update")
  //console.log(response)
  //console.log(response.data)
  //console.log(response.data.data)
  //expect(response.applicants.length).toBe(0)
  expect(response.data.data.title).toEqual(schema.title)
  expect(response.data.data.duration).toEqual(schema.duration)
  expect(response.data.data.educator).toEqual(schema.educator)
  expect(response.data.data.price).toEqual(schema.price)
  expect(response.data.data.description).toEqual(schema.description)
  expect(response.data.data.location).toEqual(schema.location)
})
//edited works
test('update a worksshop does not work with wrong data',async() => {
  expect.assertions(1);
  const schema = {
      "name": "ali",
      "duration": 4,
      "educator": "m3lem",
      "price":  3000,
      "description":  "quite popular",
      "location": "Cairo"
  };
  const aWorkshop = await funcs.getWorkshop();
  const id = aWorkshop._id;
  const response = await funcs.updateWorkshop(id,schema);
  expect(response).toEqual("error")
})
//works!!
test('testing that get all works', async () => {
  expect.assertions(5)

  const response1 =  await funcs.getWorkshop()
  //console.log(response1)

  await funcs.createWorkshop({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  

  const response =  await funcs.getWorkshop()
  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].title).toEqual('a')
  expect(response.data.data[l-1].eduOrganisation).toEqual('aaa')
  expect(response.data.data[l-1].educator).toEqual('a1')
  expect(response.data.data[l-1].price).toEqual(2)
  });
//works
test('Test getting a certain workshop ', async () => {
  try {

      expect.assertions(6)
      //creating a lawyer for testing 
      //await funcs.CreateReviewerOrLawyer('Lawyer','Ali el seba3y','male','Egyptian','national id','A6123456778','1998-12-10T00:00:00.000Z','Maadi','ali@yahoo.com','123456788')
      await funcs.createWorkshop({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  


      const res = await funcs.getWorkshop()
      expect(res.data).toBeDefined()
      expect(res.status).toEqual(200)

      const res2 = await funcs.getWorkshops(res.data.data[res.data.data.length-1]._id)
      console.log(res2.data)

      expect(res2.data.data.title).toEqual('a')
      expect(res2.data.data.eduOrganisation).toEqual('aaa')
      expect(res2.data.data.educator).toEqual('a1')
      expect(res2.data.data.price).toEqual(2)
    }

    catch(error){

        console.log(error)

    }
  })
  //pending -> not working
  test('testing that delete works for workshop', async ()=>{
  expect.assertions(1) 
  const response =  await funcs.getWorkshop()
  const did = response.data.data[0]._id;
  await funcs.deleteWorkshop(did)
  const response2 =  await funcs.getWorkshops(did)
  expect(Object.keys(response2.data)).toEqual(['error'])
  });
  //
  
  //

// test('testing that get by id does not work works', async () => {
//   expect.assertions(1)
//   expect(await funcs.getWorkshops('bbllaabbllaa').status).toEqual(undefined);

// }),


// test('testing that get by id does not work works', async () => {
//   expect.assertions(1)
//   expect(await funcs.deleteWorkshop('bbllaabbllaa').status).toEqual(undefined);

// }),
//


//////////////////////
/////Test Jobs
test("testing that delete works jobs", async () => {
  expect.assertions(1);
  await funcs.createJob({
    title: "sssss",
    location: "Cairo",
    salary: 9000,
    dailyhours: 9,
    description: "kkkkkkkkkkk",
    startdate: "1998-10-1",
    enddate: "2010-9-10",
    //state:'open',
    partner: "5c9673e3a7f0f43f641386de"
  });
  const response = await funcs.getJobs();
  const l = response.data.data.length;
  await funcs.deleteJob(response.data.data[l - 1]._id);
  const response2 = await funcs.getJobs();
  expect(response2.data.data.length).toEqual(l - 1);
});

test("testing that get all works Jobs", async () => {
  expect.assertions(7);
  const response1 = await funcs.getJobs();
  await funcs.createJob({
    title: "GGQQAkkkkkkkkkA",
    location: "Cairo",
    salary: 9000,
    dailyhours: 9,
    description: "kkkkkkkkkkk",
    startdate: "1998-10-1",
    enddate: "2010-9-10",
    //state:'open',
    partner: "5c9673e3a7f0f43f641386de"
  });

  const response = await funcs.getJobs();
  const l = response1.data.data.length + 1;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].title).toEqual("GGQQAkkkkkkkkkA");
  expect(response.data.data[l - 1].location).toEqual("Cairo");
  expect(response.data.data[l - 1].salary).toEqual(9000);
  expect(response.data.data[l - 1].dailyhours).toEqual(9);
  expect(response.data.data[l - 1].description).toEqual("kkkkkkkkkkk");
  //expect(response.data.data[l-1].state).toEqual('open')
  expect(response.data.data[l - 1].partner).toEqual("5c9673e3a7f0f43f641386de");
});
test("Test getting a certain jobs ", async () => {
  try {
    const res = await funcs.getJobs();
    expect(res.data).toBeDefined();
    //expect(res.status).toEqual(200)

    const res2 = await funcs.getJob(
      res.data.data[res.data.data.length - 1]._id
    );
    console.log(res2.data);

    expect(res2.data.data.title).toEqual("GGQQAkkkkkkkkkA");
    expect(res2.data.data.location).toEqual("Cairo");
    expect(res2.data.data.salary).toEqual(9000);
    expect(res2.data.data.dailyhours).toEqual(9);
    expect(res2.data.data.description).toEqual("kkkkkkkkkkk");
    //expect(res2.data.data.state).toEqual('open')
    expect(res2.data.data.partner).toEqual("5c9673e3a7f0f43f641386de");
  } catch (error) {
    //console.log(error)
  }
});

test("testing job creation", async () => {
  expect.assertions(6);
  const l = (await funcs.getJobs()).data.data.length;
  await funcs.createJob({
    title: "sasa",
    location: "Cairo",
    salary: 9000,
    dailyhours: 9,
    description: "kkkkkkkkkkk",
    startdate: "1998-10-1",
    enddate: "2010-9-10",
    //state:'open',
    partner: "5c9673e3a7f0f43f641386de"
  });
  const response = await funcs.getJobs();
  expect(response.data.data[l].title).toEqual("sasa");
  expect(response.data.data[l].location).toEqual("Cairo");
  expect(response.data.data[l].salary).toEqual(9000);
  expect(response.data.data[l].dailyhours).toEqual(9);
  expect(response.data.data[l].description).toEqual("kkkkkkkkkkk");
  //expect(response.data.data[l].state).toEqual('open')
  expect(response.data.data[l].partner).toEqual("5c9673e3a7f0f43f641386de");
});

test("testing job updated", async () => {
  expect.assertions(6);
  await funcs.createJob({
    title: "sasaupdating",
    location: "Cairo",
    salary: "9000",
    dailyhours: "9",
    description: "kkkkkkkkkkk",
    startdate: "1998-10-1",
    enddate: "2010-9-10",
    state: "open",
    partner: "5c9673e3a7f0f43f641386de"
  });
  const response = await funcs.getJobs();
  const l = response.data.data.length;
  await funcs.updateJob(response.data.data[l - 1]._id, {
    title: "sasaaaaaaaaaupdated",
    location: "Cairoooo",
    salary: 9000000,
    dailyhours: 10,
    description: "kkkkkkkeeeekkkk",
    // startdate:'1998-1-10',
    // enddate:'2010-8-11',
    partner: "5c9673e3a7f0f43f641386de"
  });
  const response2 = await funcs.getJobs();
  const l2 = response2.data.data.length;
  expect(response2.data.data[l2 - 1].title).toEqual("sasaaaaaaaaaupdated");
  expect(response2.data.data[l2 - 1].location).toEqual("Cairoooo");
  expect(response2.data.data[l2 - 1].salary).toEqual(9000000);
  expect(response2.data.data[l2 - 1].dailyhours).toEqual(10);
  expect(response2.data.data[l2 - 1].description).toEqual("kkkkkkkeeeekkkk");
  // expect(response2.data.data[l2-1].state).toEqual('closed')
  expect(response2.data.data[l2 - 1].partner).toEqual(
    "5c9673e3a7f0f43f641386de"
  );
});

///////////////Testing Edu Org//////////////////

test("testing that get all works EduOrg", async () => {
  expect.assertions(5);
  const response1 = await funcs.getEduOrg();
  await funcs.createEduOrg({
    userName: "uayyyyyyyyya",
    name: "aaaaaaaaaa",
    password: "123h45678",
    email: "a@gmail.com"
  });
  const response = await funcs.getEduOrg();
  const l = 1 + response1.data.data.length;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].userName).toEqual("uayyyyyyyyya");
  expect(response.data.data[l - 1].name).toEqual("aaaaaaaaaa");
  expect(response.data.data[l - 1].email).toEqual("a@gmail.com");
  expect(response.data.data[l - 1].password).toEqual("123h45678");
  console.log("in 1st edu org");
});

test(`Create Edu Org`, async () => {
  expect.assertions(4); //this depends on how many expect I am using
  const l = (await funcs.getEduOrg()).data.data.length;
  await funcs.createEduOrg({
    userName: "MMMM",
    name: "MMMMMMMM",
    password: "21323234",
    email: "MMMMMM@gg.com"
  });
  //const response =  await funcs.createEduOrg()
  const response = await funcs.getEduOrg();
  console.log(l);
  console.log(response.data.data.length);
  //4 expect -> assertions(4)
  expect(response.data.data[l].userName).toEqual("MMMM");
  expect(response.data.data[l].name).toEqual("MMMMMMMM");
  expect(response.data.data[l].password).toEqual("21323234");
  expect(response.data.data[l].email).toEqual("MMMMMM@gg.com");
});

test("testing that update works for EduOrg", async () => {
  expect.assertions(4);
  await funcs.createEduOrg({
    userName: "akdslfm96",
    email: "a@x.com",
    password: "a1fiofbdk$",
    name: "Lamaaa fk"
  });

  const response = await funcs.getEduOrg();

  const l = response.data.data.length;
  await funcs.updateEduOrg(response.data.data[l - 1]._id, {
    userName: "lamaazh2t",
    email: "v@x.com",
    password: "a1fiofibdk$",
    name: "Lamaaa fd"
  });

  const response2 = await funcs.getEduOrg();

  const l2 = response2.data.data.length;
  //console.log
  expect(response2.data.data[l2 - 1].userName).toEqual("lamaazh2t");
  expect(response2.data.data[l2 - 1].email).toEqual("v@x.com");

  expect(response2.data.data[l2 - 1].password).toEqual("a1fiofibdk$");
  expect(response2.data.data[l2 - 1].name).toEqual("Lamaaa fd");
});

test("testing that delete works", async () => {
  expect.assertions(1);
  await funcs.createEduOrg({
    userName: "aaa",
    name: "a",
    email: "a@gmail.com",
    password: "12345678"
  });
  const response = await funcs.getEduOrg();
  const l = response.data.data.length;
  await funcs.deleteEduOrg(response.data.data[l - 1]._id);
  const response2 = await funcs.getEduOrg();
  expect(response2.data.data.length).toEqual(l - 1);
});

test("testing that get by id works", async () => {
  expect.assertions(4);
  await funcs.createEduOrg({
    userName: "salma",
    name: "a",
    email: "a@gmail.com",
    password: "12345678"
  });
  const response = await funcs.getEduOrg();
  const l = response.data.data.length;
  const response1 = await funcs.getEduOrgById(response.data.data[l - 1]._id);
  expect(response1.data.data.userName).toEqual("salma");
  expect(response1.data.data.name).toEqual("a");
  expect(response1.data.data.email).toEqual("a@gmail.com");
  expect(response1.data.data.password).toEqual("12345678");
  await funcs.deleteEduOrg(response.data.data[l - 1]._id);
});

// test("testing that get by id does not work with wrong data", async () => {
//   expect.assertions(1);
//   expect(await funcs.getEduOrgById("bbllaabbllaa").status).toEqual(undefined);
// });

// test("testing that delete does not work with wrong data", async () => {
//   expect.assertions(1);
//   expect(await funcs.deleteEduOrg("bbllaabbllaa").status).toEqual(undefined);
//   console.log("finished testing Edu org");
// });

///////////////////Test Partners ///////////////////////
test("testing that get all works for partners", async () => {
  expect.assertions(4);
  const response1 = await funcs.getPartners();
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  const l = response1.data.data.length + 1;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].name).toEqual("a");
  expect(response.data.data[l - 1].email).toEqual("a@x.com");
  expect(response.data.data[l - 1].password).toEqual("a1");
});

test("testing that get works for partners", async () => {
  expect.assertions(3);
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  const l = response.data.data.length;
  const response1 = await funcs.getPartner(response.data.data[l - 1]._id);
  expect(response1.data.name).toEqual("a");
  expect(response1.data.email).toEqual("a@x.com");
  expect(response1.data.password).toEqual("a1");
});

test("testing that create works for partners", async () => {
  expect.assertions(3);
  const l = (await funcs.getPartners()).data.data.length;
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  expect(response.data.data[l].name).toEqual("a");
  expect(response.data.data[l].email).toEqual("a@x.com");
  expect(response.data.data[l].password).toEqual("a1");
});

test("testing that update works for partners", async () => {
  expect.assertions(3);
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  const l = response.data.data.length;
  await funcs.updatePartner(response.data.data[l - 1]._id, {
    name: "m",
    email: "m@x.com",
    password: "m1"
  });
  const response2 = await funcs.getPartners();
  const l2 = response2.data.data.length;
  expect(response2.data.data[l2 - 1].name).toEqual("m");
  expect(response2.data.data[l2 - 1].email).toEqual("m@x.com");
  expect(response2.data.data[l2 - 1].password).toEqual("m1");
});

test("testing that delete works for partners", async () => {
  expect.assertions(1);
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  const l = response.data.data.length;
  await funcs.deletePartner(response.data.data[l - 1]._id);
  const response2 = await funcs.getPartners();
  expect(response2.data.data[l - 1]).toEqual(undefined);
});

test("testing that create doesnt work with wrong data for partners", async () => {
  expect.assertions(1);
  const l = (await funcs.getPartners()).data.data.length;
  await funcs.createPartner({ name: "a", email: "123" });
  const response = await funcs.getPartners();
  expect(response.data.data[l]).toEqual(undefined);
});

test("testing that update doesnt work with wrong data for partners", async () => {
  expect.assertions(3);
  await funcs.createPartner({ name: "a", email: "a@x.com", password: "a1" });
  const response = await funcs.getPartners();
  const l = response.data.data.length;
  await funcs.updatePartner(response.data.data[l - 1]._id, {
    name: "m",
    email: "123"
  });
  const response2 = await funcs.getPartners();
  expect(response2.data.data[l - 1].name).toEqual("a");
  expect(response2.data.data[l - 1].email).toEqual("a@x.com");
  expect(response2.data.data[l - 1].password).toEqual("a1");

  console.log("finished testing Partners");
});

//const Masterclass = require("./models/Masterclass");
//jest.setTimeout(10000000)
///////////////////////Test MasterClass//////////////////
test("read a masterclass exists", async () => {
  console.log("finished in masterclass");
  expect.assertions(1);
  return expect(typeof funcs.readMaster).toBe("function");
});

test("read a masterclass by id", async () => {
  data = {
    courseIDs: [],
    workshopsIDs: [],
    title: "YOYOOOOOZZZ",
    duration: "5 months",
    Eduorganization: "helloo",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  };
  const createdMaster = await funcs.createMaster(data);
  const master = createdMaster.data.data;
  const id = master["_id"];
  const read = await funcs.readMaster(id);
  const readMaster = read.data.data;
  expect.assertions(1);
  return expect(readMaster).toEqual(master);
});

test("delete a masterclass exists", async () => {
  expect.assertions(1);
  return expect(typeof funcs.deleteMaster).toBe("function");
});

test("delete a masterclass by id", async () => {
  data = {
    courseIDs: [],
    workshopsIDs: [],
    title: "yaraaaaa",
    duration: "5 months",
    Eduorganization: "helloo",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  };
  const createdMaster = await funcs.createMaster(data);
  const master = createdMaster.data.data;
  const id = master["_id"];
  const read = await funcs.deleteMaster(id);
  const readMaster = read.data.data;
  expect.assertions(1);
  return expect(readMaster).toEqual(master);
});

test("testing that get all works", async () => {
  expect.assertions(7);
  const response1 = await funcs.getmasters();
  await funcs.createMasterM({
    //  courseIDs:[] ,
    //  workshopsIDs: [],
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 50,
    description: "software engineering",
    location: "GUC"
  });

  const response = await funcs.getmasters();
  const l = response1.data.data.length + 1;
  // const response =  await funcs.getmasters()
  // const l = 3 + response1.data.data.length
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].title).toEqual("yara");
  expect(response.data.data[l - 1].duration).toEqual("5 month");
  expect(response.data.data[l - 1].Eduorganization).toEqual("hello");
  expect(response.data.data[l - 1].price).toEqual(50);
  expect(response.data.data[l - 1].description).toEqual("software engineering");
  expect(response.data.data[l - 1].location).toEqual("GUC");
});

test("create a masterclass exists", async () => {
  expect.assertions(1);
  return expect(typeof funcs.createMaster).toBe("function");
});

test("create a masterclass ", async () => {
  data = {
    courseIDs: [],
    workshopsIDs: [],
    title: "YOYOOOOOZZZ",
    duration: "5 months",
    Eduorganization: "helloo",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  };
  const createdMaster = await funcs.createMaster(data);
  const master = createdMaster.data.data;
  const id = master["_id"];
  // const read=await masterclass.readMaster(id)
  // const readMaster=read.data.data
  // expect.assertions(1)
  return expect(master).toMatchObject(data);
});

test("testing that create works for Masterclasses", async () => {
  expect.assertions(6);
  const l = (await funcs.getmasters()).data.data.length;
  await funcs.createMasterM({
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  });
  const response = await funcs.getmasters();

  //expect(response.data.data.length).toBe(l)
  expect(response.data.data[l].title).toEqual("yara");
  expect(response.data.data[l].duration).toEqual("5 month");
  expect(response.data.data[l].Eduorganization).toEqual("hello");
  expect(response.data.data[l].price).toEqual(5000);
  expect(response.data.data[l].description).toEqual("software engineering");
  expect(response.data.data[l].location).toEqual("GUC");
  // expect(response.data.data[l].courseIDs).toEqual('5c95052d33373c47208785d7')
  //expect(response.data.data[l].location).toEqual('5c96a619329f797114996421')
});

test("testing that update works for MasterclassesMA", async () => {
  expect.assertions(6);
  await funcs.createMasterM({
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  });
  const response = await funcs.getmasters();
  const l = response.data.data.length;
  await funcs.updateMasterM(response.data.data[l - 1]._id, {
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yarad",
    duration: "5 monthy",
    Eduorganization: "helloy",
    price: 50007,
    description: "gsoftware engineering",
    location: "fGUC"
  });
  const response2 = await funcs.getmasters();
  const l2 = response2.data.data.length;
  expect(response2.data.data[l2 - 1].title).toEqual("yarad");
  expect(response2.data.data[l2 - 1].duration).toEqual("5 monthy");
  expect(response2.data.data[l2 - 1].Eduorganization).toEqual("helloy");
  expect(response2.data.data[l2 - 1].price).toEqual(50007);
  expect(response2.data.data[l2 - 1].description).toEqual(
    "gsoftware engineering"
  );
  expect(response2.data.data[l2 - 1].location).toEqual("fGUC");
});

test("testing that update doesnt work with wrong data for Masterclasses", async () => {
  expect.assertions(6);

  await funcs.createMasterM({
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  });
  const response = await funcs.getmasters();
  const l = response.data.data.length;
  await funcs.updateMasterM(response.data.data[l - 1]._id, {
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yarad",
    duration: "5",
    price: "hh"
  });
  const response2 = await funcs.getmasters();
  expect(response2.data.data[l - 1].title).toEqual("yara");
  expect(response2.data.data[l - 1].duration).toEqual("5 month");
  expect(response2.data.data[l - 1].Eduorganization).toEqual("hello");
  expect(response2.data.data[l - 1].price).toEqual(5000);
  expect(response2.data.data[l - 1].description).toEqual(
    "software engineering"
  );
  expect(response2.data.data[l - 1].location).toEqual("GUC");
});

test("testing that create doesnt work with wrong data for masterclasses", async () => {
  expect.assertions(1);
  const l = (await funcs.getmasters()).data.data.length;
  await funcs.createMasterM({
    //courseIDs: '5c95052d33373c47208785d7',
    //workshopsIDs: '5c96a619329f797114996421',
    title: "yarad",
    duration: "5",
    price: "hh"
  });
  const response = await funcs.getmasters();
  expect(response.data.data[l]).toEqual(undefined);
});

test("testing that delete works for masters", async () => {
  expect.assertions(1);
  await funcs.createMasterM({
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 5000,
    description: "software engineering",
    location: "GUC"
  });
  const response = await funcs.getmasters();
  const l = response.data.data.length;
  await funcs.deleteMasterM(response.data.data[l - 1]._id);
  const response2 = await funcs.getmasters();
  expect(response2.data.data[l - 1]).toEqual(undefined);
});
test("testing that get works for masters", async () => {
  expect.assertions(6);
  await funcs.createMasterM({
    //  courseIDs:[] ,
    //  workshopsIDs: [],
    title: "yara",
    duration: "5 month",
    Eduorganization: "hello",
    price: 50,
    description: "software engineering",
    location: "GUC"
  });
  const response = await funcs.getmasters();
  const l = response.data.data.length;
  const response1 = await funcs.getMasterM(response.data.data[l - 1]._id);

  expect(response1.data.data.title).toEqual("yara");
  expect(response1.data.data.duration).toEqual("5 month");
  expect(response1.data.data.Eduorganization).toEqual("hello");
  expect(response1.data.data.price).toEqual(50);
  expect(response1.data.data.description).toEqual("software engineering");
  expect(response1.data.data.location).toEqual("GUC");
});

/////////////////////////Admins Tests//////////////////
test("testing that get all works", async () => {
  expect.assertions(5);
  const response1 = await funcs.getAdmins();
  await funcs.createAdmin({
    username: "lamabts",
    full_name: "Lamaa Ihab",
    email: "lama89@gmail.com",
    password: "fiodflkofdl$"
  });

  const response = await funcs.getAdmins();
  const l = response1.data.data.length + 1;
  expect(response.data.data.length).toBe(l);
  expect(response.data.data[l - 1].username).toEqual("lamabts");
  expect(response.data.data[l - 1].full_name).toEqual("Lamaa Ihab");
  expect(response.data.data[l - 1].email).toEqual("lama89@gmail.com");
  expect(response.data.data[l - 1].password).toEqual("fiodflkofdl$");
});

test("testing that create works for admins", async () => {
  expect.assertions(4);
  const l = (await funcs.getAdmins()).data.data.length;
  await funcs.createAdmin({
    username: "lamaa87",
    email: "a@x.com",
    password: "a1eodjiofdldi$",
    full_name: "Lama fd"
  });
  const response = await funcs.getAdmins();
  expect(response.data.data[l].username).toEqual("lamaa87");
  expect(response.data.data[l].email).toEqual("a@x.com");
  expect(response.data.data[l].password).toEqual("a1eodjiofdldi$");
  expect(response.data.data[l].full_name).toEqual("Lama fd");
});

test("testing that get by id works for admins", async () => {
  // expect.assertions(4)
  await funcs.createAdmin({
    username: "akdslfm98",
    email: "a@x.com",
    password: "a1fiofjfiodk$",
    full_name: "Lamaaa fr"
  });
  const response = await funcs.getAdmins();
  const l = response.data.data.length;
  const response1 = await funcs.getAdmin(response.data.data[l - 1]._id);
  expect(response1.data.data.username).toEqual("akdslfm98");
  expect(response1.data.data.email).toEqual("a@x.com");
  expect(response1.data.data.password).toEqual("a1fiofjfiodk$");
  expect(response1.data.data.full_name).toEqual("Lamaaa fr");
});

test("testing that update works for admins", async () => {
  expect.assertions(4);
  await funcs.createAdmin({
    username: "akdslfm96",
    email: "a@x.com",
    password: "a1fiofjfibdk$",
    full_name: "Lamaaa fk"
  });
  //console.log("1")
  const response = await funcs.getAdmins();
  // console.log("2")
  const l = response.data.data.length;
  await funcs.updateAdmin(response.data.data[l - 1]._id, {
    username: "lamaazh2t",
    email: "v@x.com",
    password: "a1fiofffibdk$",
    full_name: "Lamaaa fd"
  });
  // console.log("3")
  const response2 = await funcs.getAdmins();
  // console.log("4")
  const l2 = response2.data.data.length;
  expect(response2.data.data[l2 - 1].username).toEqual("lamaazh2t");
  expect(response2.data.data[l2 - 1].email).toEqual("v@x.com");
  expect(response2.data.data[l2 - 1].password).toEqual("a1fiofffibdk$");
  expect(response2.data.data[l2 - 1].full_name).toEqual("Lamaaa fd");
});

// testing that delete works
test("testing that delete works for admins", async () => {
  expect.assertions(1);
  await funcs.createAdmin({
    username: "tae95",
    email: "a@x.com",
    password: "a1defdkljfmk$",
    full_name: "kim taehyung"
  });
  const response = await funcs.getAdmins();
  const l = response.data.data.length;
  await funcs.deleteAdmin(response.data.data[l - 1]._id);
  const response2 = await funcs.getAdmins();
  expect(response2.data.data[l - 1]).toEqual(undefined);
});

//testing create doesnt work
test("testing that create doesnt work with wrong data for admins", async () => {
  expect.assertions(1);
  const l = (await funcs.getAdmins()).data.data.length;
  await funcs.createAdmin({ username: "a", email: "123" });
  const response = await funcs.getAdmins();
  expect(response.data.data[l]).toEqual(undefined);
});

// testing update doesnt work
test("testing that update doesnt work with wrong data for admins", async () => {
  expect.assertions(4);
  await funcs.createAdmin({
    username: "a",
    email: "a@x.com",
    password: "a1rfijekfjrio$",
    full_name: "park jimin"
  });
  const response = await funcs.getAdmins();
  const l = response.data.data.length;
  await funcs.updateAdmin(response.data.data[l - 1]._id, {
    username: "m",
    email: "123"
  });
  const response2 = await funcs.getAdmins();
  expect(response2.data.data[l - 1].username).toEqual("a");
  expect(response2.data.data[l - 1].email).toEqual("a@x.com");
  expect(response2.data.data[l - 1].password).toEqual("a1rfijekfjrio$");
  expect(response2.data.data[l - 1].full_name).toEqual("park jimin");
  console.log("finished testing Admins");
});
