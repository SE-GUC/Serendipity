
const funcs = require('./fn');
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
  const aWorkshop = await Workshop.findOne({});
  const id = aWorkshop.id;
  const response = await funcs.updateWorkshopCRUD(id,schema);
  console.log(response)
  expect(response).toEqual("error")
})

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
