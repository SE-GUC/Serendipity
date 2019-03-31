
const fn = require('./fn')
const Course = require('./models/Course')
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://YasmineMaheeb:SerendipityPassWord@cluster0-bufsj.mongodb.net/test?retryWrites=true", {
    useNewUrlParser: true
  })

beforeAll(async () => {
  await new Course({
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
    "duration":	4,
    "educator":	"m3lem",
    "price":	3000,
    "description":	"quite popular",
    "location":	"Cairo"
  };
  const aCourse = await Course.findOne({});
  const id = aCourse.id;
  const response = await fn.updateCourse(id,schema);
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
})