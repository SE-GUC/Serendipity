const masterclass= require('./masterclass')

test("read a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(masterclass.readMaster)).toBe('function')
})

 test("read a masterclass by id",async()=>{
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
    const createdMaster=await masterclass.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await masterclass.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})

test("Update a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(masterclass.updateMaster)).toBe('function')
})

test("Update a masterclass by id",async()=>{
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
    const createdMaster=await masterclass.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await masterclass.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})
test("delete a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(masterclass.deleteMaster)).toBe('function')
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
    const createdMaster=await masterclass.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await masterclass.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})


////////////////////////////////

test("read a masterclass by id will not work with wrong data",async()=>{
    data={
        courseIDs: [],
        workshopsIDs: [],
        title: "yaraaa",
        duration: "5 month" ,
        Eduorganization:"helloo",
        price: 50,
        description: "software engineering",
        location: "GUC"
        
        }
    const createdMaster=await masterclass.createMaster(data)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await masterclass.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(0)
    return expect(readMaster).toBeUndefined
})





