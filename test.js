const fn = require('./fn')
const Course = require('./models/Course')
const mongoose = require('mongoose')
jest.setTimeout(100000);

const db = require('./config/keys').mongoURI
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

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
        const aCourse = await Course.findOne();
        const id = aCourse._id;
        const response = await fn.updateCourse(id,{'title':'yasyas'});
        expect(response.title).toEqual('yasyas')
    })
    
    test('update a course full data',async() => {
        expect.assertions(7);
        const schema = {
            "applicants"	:[],
            "title":	"cat",
            "duration":	4,
            "educator":	"m3lem",
            "price":	3000,
            "description":	"quite popular",
            "location":	"Cairo"
        };
        const aCourse = await Course.findOne();
        const id = aCourse._id;
        const response = await fn.updateCourse(id,schema);
        expect(response.applicants.length).toBe(0)
        expect(response.title).toEqual(schema.title)
        expect(response.duration).toEqual(schema.duration)
        expect(response.educator).toEqual(schema.educator)
        expect(response.price).toEqual(schema.price)
        expect(response.description).toEqual(schema.description)
        expect(response.location).toEqual(schema.location)
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
    const aCourse = await Course.findOne();
    const id = aCourse._id;
    const response = await fn.updateCourse(id,schema);
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
          })
          
          test('testing that get by id does not work works', async () => {
              expect.assertions(1)
              expect(await fn.getCourses('bbllaabbllaa').status).toEqual(undefined);
              
          }),
          
          
          test('testing that get by id does not work works', async () => {
              expect.assertions(1)
              expect(await fn.deleteCourse('bbllaabbllaa').status).toEqual(undefined);
              
          }),
       test('testing that delete works for course', async ()=>{
        expect.assertions(1) 
        const response =  await fn.getCourse()
        const did = response.data.data[0]._id;
        await fn.deleteCourse(did)
        const response2 =  await fn.getCourses(did)
        expect(Object.keys(response2.data)).toEqual(['error'])
    });
       