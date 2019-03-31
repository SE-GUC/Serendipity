const funcs = require('./fn');
const Masterclass = require('./models/Masterclass')
jest.setTimeout(10000000)


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

// test("Update a masterclass exists",async()=>{
//     expect.assertions(1)
//     return expect(typeof(funcs.updateMaster)).toBe('function')
// })

// test("Update a masterclass by id",async()=>{
//     data={
//         courseIDs: [],
//         workshopsIDs: [],
//         title: "yaraaaaa",
//         duration: "5 months",
//         Eduorganization:"helloo",
//         price: 5000,
//         description: "software engineering",
//         location: "GUC"
        
//         }
//         data={
//             courseIDs: [],
//             workshopsIDs: [],
//             title: "yaraaaaa2",
//             duration: "5 months2",
//             Eduorganization:"helloo2",
//             price: 50003,
//             description: "3software engineering",
//             location: "GUC3"
            
//             }
//     const createdMaster=await funcs.createMaster(data)
//     const master= createdMaster.data.data
//     const id=master["_id"]
//     const read=await funcs.updateMaster(id,data)
//     const readMaster=read.data.data
//     expect.assertions(1)
//     return expect(readMaster).toMatch(master)
// })
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
      
      
      test('testing that delete works for partners', async ()=>{



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

       test('testing that get works for partners', async () => {
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







//
  






