
const funcs = require('./fn');
const Workshop = require('./models/Workshop')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
  })


// beforeAll(async () => {
//   await new Workshop({
//     _id: mongoose.Types.ObjectId(),
//     title: "tagroba",
//     eduOrganisation: "Nasa",
//     duration: 4,
//     educator: "slim",
//     price: 300000000,
//     description: "quite popular",
//     location: "Las Vegas"
//   }).save();
//   return "one added"
// })

// test('update a workshop uncomplete data',async() => {
//   expect.assertions(1);
//   const aWorkshop = await Workshop.findOne({});
//   const id = aWorkshop.id;
//   const response = await funcs.updateWorkshopCRUD(id,{'title':'yasyas'});
//   expect(response.data.data.title).toEqual('yasyas')
// })

// test('update a workshop full data',async() => {
//   expect.assertions(1);
//   const schema = {
//     "applicants"	:[],
//     "title":	"cook",
//     "duration":	4,
//     "educator":	"Smsm",
//     "price":	3000,
//     "description":	"quite popular",
//     "location":	"Cairo"
//   };
//   const aWorkshop = await Workshop.findOne({});
//   const id = aWorkshop.id;
//   const response = await funcs.updateWorkshopCRUD(id,schema);
//   console.log(response)
//   expect(response.data.data).toMatchObject(schema)
// })

// test('update a workshop does not work with wrong data',async() => {
//   expect.assertions(1);
//   const schema = {
//     "applicants"	:[],
//     "name":	"ali",      //no field called name
//     "duration":	4,
//     "educator":	"m3lem",
//     "price":	3000,
//     "description":	"quite popular",
//     "location":	"Cairo"
//   };
//   const aWorkshop = await Workshop.findOne({});
//   const id = aWorkshop.id;
//   const response = await funcs.updateWorkshopCRUD(id,schema);
//   console.log(response)
//   expect(response).toEqual("error")
// })

// test('create workshop', async() =>{
//   expect.assertions(1);
//   const schema = {
//     "title": "Workshop1",
//     "eduOrganisation": "Nasa",
//     "duration": 4,
//     "educator": "slim",
//     "price": 300000000,
//     "description": "quite popular",
//     "location": "Las Vegas"
//   };
//   const bef = await Workshop.find(schema)
//   await funcs.createWorkshop(schema)
//   const aft = await Workshop.find(schema)
//   expect(aft.length - bef.length).toBe(1);  
// })


// test('create workshop does not work with incorrect data', async() =>{
//   expect.assertions(2);
//   const schema = {
//     "name": "workshop1",
//     "eduOrganisation": "Nasa",
//     "duration": 4,
//     "educator1": "slim",        //no field called educator1
//     "price": 300000000,
//     "description": "quite popular",
//     "location": "Las Vegas"
//   };
//   const bef = await Workshop.find(schema)
//   const res = await funcs.createWorkshop(schema)
//   const aft = await Workshop.find(schema)
//   console.log(res)
//   expect(aft.length - bef.length).toBe(0);
//   expect(res).toEqual("error")  
// })


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

   test('testing that delete works for workshop', async ()=>{
    expect.assertions(1)
    await funcs.createWorkshop({title: 'a', eduOrganisation: 'aaa', educator: 'a1',price:2})  
    const response =  await funcs.getWorkshop()
    const l = response.data.data.length
    await funcs.deleteWorkshop(response.data.data[l-1]._id)
    const response2 =  await funcs.getWorkshops(response.data.data[response.data.data.length-1]._id)
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
  });

  test('testing that get by id does not work works', async () => {
    expect.assertions(1)
      expect(await funcs.getWorkshops('bbllaabbllaa').status).toEqual(undefined);

    });


test('testing that get by id does not work works', async () => {
    expect.assertions(1)
      expect(await funcs.deleteWorkshop('bbllaabbllaa').status).toEqual(undefined);

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
