
const fn = require('./fn')
const Workshop = require('./models/Workshop')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
  })


test('update a workshop uncomplete data',async() => {
  expect.assertions(1);
  const response = await fn.updateWorkshop('5c950aaca8ae394ae8b02875',{'title':'yasyas'});
  expect(response.data.data.title).toEqual('yasyas')
})

test('update a workshop full data',async() => {
  expect.assertions(1);
  const schema = {
    "applicants"	:["5c9e812150bd906a47a946d2"],
    "title":	"cook",
    "duration":	4,
    "educator":	"m3lem",
    "price":	3000,
    "description":	"quite popular",
    "location":	"Cairo"
  };
  const response = await fn.updateWorkshop('5c94a5f45dc85d0cc5322aba',schema);
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
  const response = await fn.updateWorkshop('5c94a5f45dc85d0cc5322aba',schema);
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
  await fn.createWorkshop(schema)
  const aft = await Workshop.find(schema)
  expect(aft.length - bef.length).toBe(1);  
})


test('create workshop does not work with incorrect data', async() =>{
  expect.assertions(2);
  const schema = {
    "title": "workshop1",
    "eduOrganisation": "Nasa",
    "duration": 4,
    "educator1": "slim",        //no field called educator1
    "price": 300000000,
    "description": "quite popular",
    "location": "Las Vegas"
  };
  const bef = await Workshop.find(schema)
  const res = await fn.createWorkshop(schema)
  const aft = await Workshop.find(schema)
  expect(aft.length - bef.length).toBe(0);
  expect(res).toEqual("error")  
})