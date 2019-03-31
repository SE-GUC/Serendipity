

const fn = require('./fn')
const Course = require('./models/Course')
const mongoose = require('mongoose')
jest.setTimeout(100000);

// mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
//     useNewUrlParser: true
//   })


//get all, get by id and delete won't work with the other test because of the timeout MAYAR

test('testing that get all works', async () => {
  expect.assertions(5)

  const response1 =  await fn.getCourse()
  //console.log(response1)

  await fn.createCourse({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  
 
  const response =  await fn.getCourse()
  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].title).toEqual('a')
  expect(response.data.data[l-1].eduOrganisation).toEqual('aaa')
  expect(response.data.data[l-1].educator).toEqual('a1')
  expect(response.data.data[l-1].price).toEqual(2)


  
  });

   test('testing that delete works for course', async ()=>{
    expect.assertions(1)
    await fn.createCourse({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  
    const response =  await fn.getCourse()
    const l = response.data.data.length
    await fn.deleteCourse(response.data.data[l-1]._id)
    const response2 =  await fn.getCourses(response.data.data[response.data.data.length-1]._id)
    expect(response2.data.data[l-1]).toEqual(undefined)
  });


  

  test('Test getting a certain course ', async () => {
    try {
    
      expect.assertions(6)
    //creating a lawyer for testing 
    //await funcs.CreateReviewerOrLawyer('Lawyer','Ali el seba3y','male','Egyptian','national id','A6123456778','1998-12-10T00:00:00.000Z','Maadi','ali@yahoo.com','123456788')
     await fn.createCourse({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  

    
    const res = await fn.getCourse()
    expect(res.data).toBeDefined()
    expect(res.status).toEqual(200)
    
    const res2 = await fn.getCourses(res.data.data[res.data.data.length-1]._id)
    console.log(res2.data)
  
    expect(res2.data.data.title).toEqual('a')
    expect(res2.data.data.eduOrganisation).toEqual('aaa')
    expect(res2.data.data.educator).toEqual('a1')
    expect(res2.data.data.price).toEqual(2)
    
   
   
    }
  
    catch(error){
      
      console.log(error)
    
    }
  });

  test('testing that get by id does not work works', async () => {
    expect.assertions(1)
      expect(await fn.getCourses('bbllaabbllaa').status).toEqual(undefined);
  
    });


test('testing that get by id does not work works', async () => {
    expect.assertions(1)
      expect(await fn.deleteCourse('bbllaabbllaa').status).toEqual(undefined);
  
    });
beforeAll(async () => {
  await new Course({

const funcs = require('./fn');
jest.setTimeout(1000000);
//test creat works
// afterAll(() => {
  
// });



test('testing that get all works', async () => {
  expect.assertions(5)
  const response1 =  await funcs.getEduOrg()
  await funcs.createEduOrg({userName:'uayyyyyyyyya', name: 'aaaaaaaaaa',  password: '123h45678', email: 'a@gmail.com'})    
  const response =  await funcs.getEduOrg()
  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].userName).toEqual('uayyyyyyyyya')
  expect(response.data.data[l-1].name).toEqual('aaaaaaaaaa')
  expect(response.data.data[l-1].email).toEqual('a@gmail.com')
  expect(response.data.data[l-1].password).toEqual('123h45678')
  
  
});

    test(`Create Edu Org`, async () => {
        expect.assertions(4) //this depends on how many expect I am using
        const l=(await funcs.getEduOrg()).data.data.length
        await funcs.createEduOrg({
          userName:'MMMM',
          name:'MMMMMMMM',
          password:"21323234",
          email:'MMMMMM@gg.com'
        })
        //const response =  await funcs.createEduOrg()
        const response =await funcs.getEduOrg();
        console.log(l)
        console.log(response.data.data.length)
        //4 expect -> assertions(4)
        expect(response.data.data[l].userName).toEqual('MMMM')
        expect(response.data.data[l].name).toEqual('MMMMMMMM')
        expect(response.data.data[l].password).toEqual('21323234')
        expect(response.data.data[l].email).toEqual('MMMMMM@gg.com')
        
      });

      test('testing that update works for EduOrg', async ()=>{
        expect.assertions(4)
        await funcs.createEduOrg({userName: 'akdslfm96', email: 'a@x.com', password: 'a1fiofbdk$',name:'Lamaaa fk'})  
       
        const response =  await funcs.getEduOrg()
     
        const l = response.data.data.length
        await funcs.updateEduOrg(response.data.data[l-1]._id,{userName: 'lamaazh2t', email: 'v@x.com', password: 'a1fiofibdk$',name:'Lamaaa fd'})
       
        const response2 =  await funcs.getEduOrg()
      
        const l2 =  response2.data.data.length
        //console.log
        expect(response2.data.data[l2-1].userName).toEqual('lamaazh2t')
        expect(response2.data.data[l2-1].email).toEqual('v@x.com')
        
        expect(response2.data.data[l2-1].password).toEqual('a1fiofibdk$')
        expect(response2.data.data[l2-1].name).toEqual('Lamaaa fd')
      });


      test('testing that delete works', async()=>{
        expect.assertions(1)
        await funcs.createEduOrg({userName:'aaa', name: 'a', email: 'a@gmail.com', password: '12345678'})  
        var response =  await funcs.getEduOrg()
        var l = response.data.data.length
        await funcs.deleteEduOrg(response.data.data[l-1]._id)
        response =  await funcs.getEduOrg()
        expect(response.data.data.length).toEqual(l-1)
    
      });
    
      test('testing that get by id works', async () => {
        expect.assertions(4)
        await funcs.createEduOrg({userName:'salma', name: 'a', email: 'a@gmail.com', password: '12345678'})  
        const response =  await funcs.getEduOrg()
        const l = response.data.data.length
        const response1 =  await funcs.getEduOrgById(response.data.data[l-1]._id)
        expect(response1.data.data.userName).toEqual('salma')
        expect(response1.data.data.name).toEqual('a')
        expect(response1.data.data.email).toEqual('a@gmail.com')
        expect(response1.data.data.password).toEqual('12345678')
        await funcs.deleteEduOrg(response.data.data[l-1]._id)
    
      
        });
    
    
        test('testing that get by id does not work with wrong data', async () => {
          expect.assertions(1)
            expect(await funcs.getEduOrgById('bbllaabbllaa').status).toEqual(undefined);
        
          });
    
        test('testing that delete does not work with wrong data', async () => {
            expect.assertions(1)
              expect(await funcs.deleteEduOrg('bbllaabbllaa').status).toEqual(undefined);
          
            });
      



//const funcs = require('./fn');
const Workshop = require('./models/Workshop')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
  })


beforeAll(async () => {
  await new Workshop({

    _id: mongoose.Types.ObjectId(),
    title: "tagroba",
    eduOrganisation: "Nasa",
    duration: 4,
    educator: "slim",
    price: 300000000,
    description: "quite popular",
    location: "Las Vegas"
  }).save();
  return "one added"
})


test('update a course uncomplete data',async() => {
  expect.assertions(1);
  const aCourse = await Course.findOne({});
  const id = aCourse.id;
  const response = await fn.updateCourse(id,{'title':'yasyas'});
  expect(response.data.data.title).toEqual('yasyas')
})

test('update a course full data',async() => {
  expect.assertions(1);
  const schema = {
    "applicants"	:[],
    "title":	"dog",
    "duration":	4,
    "educator":	"m3lem",

test('update a workshop uncomplete data',async() => {
  expect.assertions(1);
  const aWorkshop = await Workshop.findOne({});
  const id = aWorkshop.id;
  const response = await funcs.updateWorkshopCRUD(id,{'title':'yasyas'});
  expect(response.data.data.title).toEqual('yasyas')
})

test('update a workshop full data',async() => {
  expect.assertions(1);
  const schema = {
    "applicants"	:[],
    "title":	"cook",
    "duration":	4,
    "educator":	"Smsm",

    "price":	3000,
    "description":	"quite popular",
    "location":	"Cairo"
  };

  const aCourse = await Course.findOne({});
  const id = aCourse.id;
  console.log(id)
  const response = await fn.updateCourse(id,schema);
  expect(response.data.data).toMatchObject(schema)
})

test('update a course does not work with wrong data',async() => {
  expect.assertions(1);
  const schema = {
    "applicants"	:[],
    "name":	"ali",

  const aWorkshop = await Workshop.findOne({});
  const id = aWorkshop.id;
  const response = await funcs.updateWorkshopCRUD(id,schema);
  console.log(response)
  expect(response.data.data).toMatchObject(schema)
})

test('update a workshop does not work with wrong data',async() => {
  expect.assertions(1);
  const schema = {
    "applicants"	:[],
    "name":	"ali",      //no field called name

    "duration":	4,
    "educator":	"m3lem",
    "price":	3000,
    "description":	"quite popular",
    "location":	"Cairo"
  };

  const aCourse = await Course.findOne({});
  const id = aCourse.id;
  const response = await fn.updateCourse(id,schema);

  const aWorkshop = await Workshop.findOne({});
  const id = aWorkshop.id;
  const response = await funcs.updateWorkshopCRUD(id,schema);

  console.log(response)
  expect(response).toEqual("error")
})


test('create course', async() =>{
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
   const bef = await Course.find(schema)
  await fn.createCourse(schema)
  const aft = await Course.find(schema)
  expect(aft.length - bef.length).toBe(1);  

test('create workshop', async() =>{
  expect.assertions(1);
  const schema = {
    "title": "Workshop1",
    "eduOrganisation": "Nasa",
    "duration": 4,
    "educator": "slim",
    "price": 300000000,
    "description": "quite popular",
    "location": "Las Vegas"
  };

  const bef = await Workshop.find(schema)
  await funcs.createWorkshop(schema)
  const aft = await Workshop.find(schema)

  expect(aft.length - bef.length).toBe(1);  
})



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
    const bef = await Course.find(schema)
  const res = await fn.createCourse(schema)
  const aft = await Course.find(schema)
   expect(aft.length - bef.length).toBe(0);
  expect(res).toEqual("error")  
  
test('create workshop does not work with incorrect data', async() =>{
  expect.assertions(2);
  const schema = {
    "name": "workshop1",
    "eduOrganisation": "Nasa",
    "duration": 4,
    "educator1": "slim",        //no field called educator1
    "price": 300000000,
    "description": "quite popular",
    "location": "Las Vegas"
  };

  const bef = await Workshop.find(schema)
  const res = await funcs.createWorkshop(schema)
  const aft = await Workshop.find(schema)
  console.log(res)
   expect(aft.length - bef.length).toBe(0);
  expect(res).toEqual("error")  
  
})




//////////////////////////////////////////////////////////////////////////////////////////////////////////
// tests for workshop

test('testing that get all works', async () => {
  expect.assertions(5)

  const response1 =  await fn.getWorkshop()
  //console.log(response1)

  await fn.createWorkshop({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  
 
  const response =  await fn.getWorkshop()

  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].title).toEqual('a')
  expect(response.data.data[l-1].eduOrganisation).toEqual('aaa')
  expect(response.data.data[l-1].educator).toEqual('a1')
  expect(response.data.data[l-1].price).toEqual(2)


  
  });

   test('testing that delete works for course', async ()=>{
    expect.assertions(1)
    await fn.createWorkshop({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  
    const response =  await fn.getWorkshop()
    const l = response.data.data.length
    await fn.deleteWorkshop(response.data.data[l-1]._id)
    const response2 =  await fn.getWorkshops(response.data.data[response.data.data.length-1]._id)

    expect(response2.data.data[l-1]).toEqual(undefined)
  });





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



    }
  });

  test('testing that get by id does not work works', async () => {
    expect.assertions(1)

      expect(await fn.getWorkshops('bbllaabbllaa').status).toEqual(undefined);

    });


test('testing that get by id does not work works', async () => {
    expect.assertions(1)

      expect(await fn.deleteCourse('bbllaabbllaa').status).toEqual(undefined);
  
    });


//Yara Amr

// test(`update workshop`, async () => {
//     expect.assertions(1) //this depends on how many expect I am using
//     const response =  await funcs.updateWorkshop()
//     console.log(response)
//     const l=(response.data.length)
//     //console to see and check data
//     console.log(response.data[l])
//     //4 expect -> assertions(4)
//     expect(response.data[l].eduOrganisation).toEqual('GQA')
//     // expect(response.data[l].name).toEqual('GGQQAA')
//     // expect(response.data[l].password).toEqual('232323')
//     // expect(response.data[l].email).toEqual('QGA@gg.com')
//   });

const funcs = require('./fn');

const axios = require('axios');
jest.setTimeout(10000000);
//Partners Tests
  test('testing that get all works for partners', async () => {
    expect.assertions(4)
    const response1 =  await funcs.getPartners()
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l =  response1.data.data.length +1
    expect(response.data.data.length).toBe(l)
    expect(response.data.data[l-1].name).toEqual('a')
    expect(response.data.data[l-1].email).toEqual('a@x.com')
    expect(response.data.data[l-1].password).toEqual('a1')
  });

  test('testing that get works for partners', async () => {
     expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
     const response1 =  await funcs.getPartner(response.data.data[l-1]._id)
     expect(response1.data.name).toEqual('a')
     expect(response1.data.email).toEqual('a@x.com')
     expect(response1.data.password).toEqual('a1')
    });
  

  test('testing that create works for partners', async () => {
    expect.assertions(3)
    const l = (await funcs.getPartners()).data.data.length
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    expect(response.data.data[l].name).toEqual('a')
    expect(response.data.data[l].email).toEqual('a@x.com')
    expect(response.data.data[l].password).toEqual('a1')
    });
    
  test('testing that update works for partners', async ()=>{
    expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.updatePartner(response.data.data[l-1]._id,{name: 'm', email: 'm@x.com', password: 'm1'})
    const response2 =  await funcs.getPartners()
    const l2 =  response2.data.data.length
    expect(response2.data.data[l2-1].name).toEqual('m')
    expect(response2.data.data[l2-1].email).toEqual('m@x.com')
    expect(response2.data.data[l2-1].password).toEqual('m1')

  });

  test('testing that delete works for partners', async ()=>{
    expect.assertions(1)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.deletePartner(response.data.data[l-1]._id)
    const response2 =  await funcs.getPartners()
    expect(response2.data.data[l-1]).toEqual(undefined)
  });

  test('testing that create doesnt work with wrong data for partners', async()=>{
    expect.assertions(1)
    const l = (await funcs.getPartners()).data.data.length
    await funcs.createPartner({name: 'a', email: '123'})  
    const response =  await funcs.getPartners()
    expect(response.data.data[l]).toEqual(undefined)
  })

  
  test('testing that update doesnt work with wrong data for partners', async ()=>{
    expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.updatePartner(response.data.data[l-1]._id,{name: 'm', email: '123'})
    const response2 =  await funcs.getPartners()
    expect(response2.data.data[l-1].name).toEqual('a')
    expect(response2.data.data[l-1].email).toEqual('a@x.com')
    expect(response2.data.data[l-1].password).toEqual('a1')

  }); 


const Masterclass = require('./models/Masterclass')
//jest.setTimeout(10000000)


test("read a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.readMaster)).toBe('function')
})

 test("read a masterclass by id",async()=>{
    data={
        courseIDs: [],
        workshopsIDs: [],
        title: "YOYOOOOOZZZ",
        duration: "5 months",
        Eduorganization:"helloo",
        price: 5000,
        description: "software engineering",
        location: "GUC"
        
        }
    const createdMaster=await funcs.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await funcs.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})

test("delete a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.deleteMaster)).toBe('function')
})

test("delete a masterclass by id",async()=>{
    data={
        courseIDs: [],
        workshopsIDs: [],
        title: "yaraaaaa",
        duration: "5 months",
        Eduorganization:"helloo",
        price: 5000,
        description: "software engineering",
        location: "GUC"
        
        }
    const createdMaster=await funcs.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await funcs.deleteMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})


////////////////////////////////


// test get MARINA
test('testing that get all works', async () => {
    expect.assertions(7)
    const response1 =  await funcs.getmasters()
    await funcs.createMasterM(
        {
        //  courseIDs:[] ,
        //  workshopsIDs: [],
        title: 'yara',
        duration: '5 month' ,
        Eduorganization:'hello',
        price: 50,
        description: 'software engineering',
        location: 'GUC'
        
        })  
    // await funcs.createMasterM( {
    //     // courseIDs: [],
    //     // workshopsIDs: [],
    //     title: 'yaraaa2',
    //     duration: '5 month2' ,
    //     Eduorganization:'helloo2',
    //     price: 50,
    //     description: 'software engineering2',
    //     location: 'GUC2'
        
    //     })  
    // await funcs.createMasterM( {
    //     // courseIDs: [],
    //     // workshopsIDs: [],
    //     title: 'yaraaa3',
    //     duration: '5 month3' ,
    //     Eduorganization:'helloo3',
    //     price: 50,
    //     description: 'software engineering3',
    //     location: 'GUC3'
        
    //     }) 
    const response =  await funcs.getmasters()
  const l = response1.data.data.length+1 
    // const response =  await funcs.getmasters()
    // const l = 3 + response1.data.data.length
    expect(response.data.data.length).toBe(l)
    expect(response.data.data[l-1].title).toEqual('yara')
    expect(response.data.data[l-1].duration).toEqual('5 month')
    expect(response.data.data[l-1].Eduorganization).toEqual('hello')
    expect(response.data.data[l-1].price).toEqual(50)
    expect(response.data.data[l-1].description).toEqual('software engineering')
    expect(response.data.data[l-1].location).toEqual('GUC')
    // expect(response.data.data[l-2].title).toEqual('yaraaa2')
    // expect(response.data.data[l-2].duration).toEqual('5 month2')
    // expect(response.data.data[l-2].Eduorganization).toEqual('helloo2')
    // expect(response.data.data[l-2].price).toBe(50)
    // expect(response.data.data[l-2].description).toEqual('software engineering2')
    // expect(response.data.data[l-2].location).toEqual('GUC2')
    // expect(response.data.data[l-1].title).toEqual('yaraaa3')
    // expect(response.data.data[l-1].duration).toEqual('5 month3')
    // expect(response.data.data[l-1].Eduorganization).toEqual('helloo3')
    // expect(response.data.data[l-1].price).toBe(50)
    // expect(response.data.data[l-1].description).toEqual('software engineering3')
    // expect(response.data.data[l-1].location).toEqual('GUC3')

    
    });
//////////////////////////////////
test("create a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.createMaster)).toBe('function')
})

 test("create a masterclass ",async()=>{
    data={
        courseIDs: [],
        workshopsIDs: [],
        title: "YOYOOOOOZZZ",
        duration: "5 months",
        Eduorganization:"helloo",
        price: 5000,
        description: "software engineering",
        location: "GUC"
        
        }
    const createdMaster=await funcs.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    // const read=await masterclass.readMaster(id)
    // const readMaster=read.data.data   
    // expect.assertions(1)
    return expect(master).toMatchObject(data)
})

test('testing that create works for Masterclasses', async () => {
    expect.assertions(6)
    const l = (await funcs.getmasters()).data.data.length
    await funcs.createMasterM({
         //courseIDs: '5c95052d33373c47208785d7',
         //workshopsIDs: '5c96a619329f797114996421',
        title: 'yara',
        duration: '5 month',
        Eduorganization:'hello',
        price: 5000,
        description: 'software engineering',
        location: 'GUC'
        
        })  
    const response =  await funcs.getmasters()

    //expect(response.data.data.length).toBe(l)
    expect(response.data.data[l].title).toEqual('yara')
    expect(response.data.data[l].duration).toEqual('5 month')
    expect(response.data.data[l].Eduorganization).toEqual('hello')
    expect(response.data.data[l].price).toEqual(5000)
    expect(response.data.data[l].description).toEqual('software engineering')
    expect(response.data.data[l].location).toEqual('GUC')
   // expect(response.data.data[l].courseIDs).toEqual('5c95052d33373c47208785d7')
    //expect(response.data.data[l].location).toEqual('5c96a619329f797114996421')
    })

    ///////////////MARINAA
    test('testing that update works for MasterclassesMA', async ()=>{
        expect.assertions(6)
        await funcs.createMasterM({
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yara',
           duration: '5 month',
           Eduorganization:'hello',
           price: 5000,
           description: 'software engineering',
           location: 'GUC'
           
           })  
        const response =  await funcs.getmasters()
        const l = response.data.data.length
        await funcs.updateMasterM(response.data.data[l-1]._id,{
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yarad',
           duration: '5 monthy',
           Eduorganization:'helloy',
           price: 50007,
           description: 'gsoftware engineering',
           location: 'fGUC'
           
           })
        const response2 =  await funcs.getmasters()
        const l2 =  response2.data.data.length
        expect(response2.data.data[l2-1].title).toEqual('yarad')
        expect(response2.data.data[l2-1].duration).toEqual('5 monthy')
        expect(response2.data.data[l2-1].Eduorganization).toEqual('helloy')
        expect(response2.data.data[l2-1].price).toEqual(50007)
        expect(response2.data.data[l2-1].description).toEqual('gsoftware engineering')
        expect(response2.data.data[l2-1].location).toEqual('fGUC')
      })
/////////////////////////////////////////
      test('testing that update doesnt work with wrong data for Masterclasses', async ()=>{
        expect.assertions(6)
    
        await funcs.createMasterM({
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yara',
           duration: '5 month',
           Eduorganization:'hello',
           price: 5000,
           description: 'software engineering',
           location: 'GUC'
           
           })  
        const response =  await funcs.getmasters()
        const l = response.data.data.length
        await funcs.updateMasterM(response.data.data[l-1]._id,{
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yarad',
           duration: '5',
           price: 'hh', 
           })
        const response2 =  await funcs.getmasters()
        expect(response2.data.data[l-1].title).toEqual('yara')    
        expect(response2.data.data[l-1].duration).toEqual('5 month')
        expect(response2.data.data[l-1].Eduorganization).toEqual('hello')
        expect(response2.data.data[l-1].price).toEqual(5000)
        expect(response2.data.data[l-1].description).toEqual('software engineering')
        expect(response2.data.data[l-1].location).toEqual('GUC')
      })
      test('testing that create doesnt work with wrong data for partners', async()=>{



        expect.assertions(1)
    
    
    
        const l = (await funcs.getmasters()).data.data.length
    
    
    
        await funcs.createMasterM({
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yarad',
           duration: '5',
           price: 'hh', 
           })  
        const response =  await funcs.getmasters()
        expect(response.data.data[l]).toEqual(undefined)
    
    
    
      })
      
      
      test('testing that delete works for masters', async ()=>{



        expect.assertions(1)
    
    
    
        await funcs.createMasterM({
            //courseIDs: '5c95052d33373c47208785d7',
            //workshopsIDs: '5c96a619329f797114996421',
           title: 'yara',
           duration: '5 month',
           Eduorganization:'hello',
           price: 5000,
           description: 'software engineering',
           location: 'GUC'
           
           }) 
    
    
    
        const response =  await funcs.getmasters()
    
    
    
        const l = response.data.data.length
    
    
    
        await funcs.deleteMasterM(response.data.data[l-1]._id)
    
    
    
        const response2 =  await funcs.getmasters()
    
    
    
        expect(response2.data.data[l-1]).toEqual(undefined)
    
    
    
      })

       test('testing that get works for masters', async () => {
        expect.assertions(6)
       await funcs.createMasterM( {
        //  courseIDs:[] ,
        //  workshopsIDs: [],
        title: 'yara',
        duration: '5 month' ,
        Eduorganization:'hello',
        price: 50,
        description: 'software engineering',
        location: 'GUC'
        
        })  
       const response =  await funcs.getmasters()
       const l = response.data.data.length
        const response1 =  await funcs.getMasterM(response.data.data[l-1]._id)

        expect(response1.data.data.title).toEqual('yara')
        expect(response1.data.data.duration).toEqual('5 month')
        expect(response1.data.data.Eduorganization).toEqual('hello')
        expect(response1.data.data.price).toEqual(50)
        expect(response1.data.data.description).toEqual('software engineering')
        expect(response1.data.data.location).toEqual('GUC')
   
       });

////Admins Tests
// testing get all works
test('testing that get all works', async () => {
  expect.assertions(5)
  const response1 =  await funcs.getAdmins()
  await funcs.createAdmin({
    username:'lamabts',
    full_name:'Lamaa Ihab',
    email:'lama89@gmail.com',  
    password:'fiodflkofdl$'
  
  })  
  //await funcs.createJob({name: 'b', email: 'b@x.com', password: 'b1'})  
  //await funcs.createJob({name: 'c', email: 'c@x.com', password: 'c1'})  
  const response =  await funcs.getAdmins()
  const l = response1.data.data.length+1
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].username).toEqual('lamabts')
  expect(response.data.data[l-1].full_name).toEqual('Lamaa Ihab')
  expect(response.data.data[l-1].email).toEqual('lama89@gmail.com')
  expect(response.data.data[l-1].password).toEqual('fiodflkofdl$')
 // expect(response.data.data[l-1].description).toEqual('kkkkkkkkkkk')
  //expect(response.data.data[l-1].startdate).toEqual('1998-10-1')
  //expect(response.data.data[l-1].enddate).toEqual('2010-9-10')
 // expect(response.data.data[l-1].state).toEqual('open')
 // expect(response.data.data[l-1].partner).toEqual('5c9673e3a7f0f43f641386de')
  
  });

// //test create works

test('testing that create works for admins', async () => {
    expect.assertions(4)
    const l = (await funcs.getAdmins()).data.data.length
    await funcs.createAdmin({username: 'lamaa87', email: 'a@x.com', password: 'a1eodjiofdldi$',full_name:'Lama fd'})  
    const response =  await funcs.getAdmins()
    expect(response.data.data[l].username).toEqual('lamaa87')
    expect(response.data.data[l].email).toEqual('a@x.com')
    expect(response.data.data[l].password).toEqual('a1eodjiofdldi$')
    expect(response.data.data[l].full_name).toEqual('Lama fd')
    });


//     // test that get by id works

    test('testing that get by id works for admins', async () => {
        // expect.assertions(4)
       await funcs.createAdmin({username: 'akdslfm98', email: 'a@x.com', password: 'a1fiofjfiodk$',full_name:'Lamaaa fr'})  
       const response =  await funcs.getAdmins()
       const l = response.data.data.length
        const response1 =  await funcs.getAdmin(response.data.data[l-1]._id)
        expect(response1.data.data.username).toEqual('akdslfm98')
        expect(response1.data.data.email).toEqual('a@x.com')
        expect(response1.data.data.password).toEqual('a1fiofjfiodk$')
        expect(response1.data.data.full_name).toEqual('Lamaaa fr')
       });


//        // test for update works
       test('testing that update works for admins', async ()=>{
        expect.assertions(4)
        await funcs.createAdmin({username: 'akdslfm96', email: 'a@x.com', password: 'a1fiofjfibdk$',full_name:'Lamaaa fk'})  
        //console.log("1")
        const response =  await funcs.getAdmins()
       // console.log("2")
        const l = response.data.data.length
        await funcs.updateAdmin(response.data.data[l-1]._id,{username: 'lamaazh2t', email: 'v@x.com', password: 'a1fiofffibdk$',full_name:'Lamaaa fd'})
       // console.log("3")
        const response2 =  await funcs.getAdmins()
       // console.log("4")
        const l2 =  response2.data.data.length
        expect(response2.data.data[l2-1].username).toEqual('lamaazh2t')
        expect(response2.data.data[l2-1].email).toEqual('v@x.com')
        expect(response2.data.data[l2-1].password).toEqual('a1fiofffibdk$')
        expect(response2.data.data[l2-1].full_name).toEqual('Lamaaa fd')
      });

//       // testing that delete works

      test('testing that delete works for admins', async ()=>{
        expect.assertions(1)
        await funcs.createAdmin({username: 'tae95', email: 'a@x.com', password: 'a1defdkljfmk$',full_name:'kim taehyung'})  
        const response =  await funcs.getAdmins()
        const l = response.data.data.length
        await funcs.deleteAdmin(response.data.data[l-1]._id)
        const response2 =  await funcs.getAdmins()
        expect(response2.data.data[l-1]).toEqual(undefined)
      });

//testing create doesnt work
      test('testing that create doesnt work with wrong data for admins', async()=>{
        expect.assertions(1)
        const l = (await funcs.getAdmins()).data.data.length
        await funcs.createAdmin({username: 'a', email: '123'})  
        const response =  await funcs.getAdmins()
        expect(response.data.data[l]).toEqual(undefined)
      })

      // testing update doesnt work
      test('testing that update doesnt work with wrong data for admins', async ()=>{
        expect.assertions(4)
        await funcs.createAdmin({username: 'a', email: 'a@x.com', password: 'a1rfijekfjrio$',full_name:'park jimin'})  
        const response =  await funcs.getAdmins()
        const l = response.data.data.length
        await funcs.updateAdmin(response.data.data[l-1]._id,{username: 'm', email: '123'})
        const response2 =  await funcs.getAdmins()
        expect(response2.data.data[l-1].username).toEqual('a')
        expect(response2.data.data[l-1].email).toEqual('a@x.com')
        expect(response2.data.data[l-1].password).toEqual('a1rfijekfjrio$')
        expect(response2.data.data[l-1].full_name).toEqual('park jimin')
    
      });  
    




