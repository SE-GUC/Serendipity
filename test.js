const functs = require('./fn');

const Assessment = require('./models/Assessment')
jest.setTimeout(10000000)


test("Read that an assessment exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.readMaster)).toBe('function')
})

 test("Read by id that an assessment exists",async()=>{
    data={
        memberName: "Reem",
        expertName: "Aysha",
        educationalOrg:"GUC",
        phoneNumber: 01234567,
        daysAvailable: "sunday, monday, tuesday"
        }
    const createdAssessment=await funcs.createAssessments(data)
    const assessment= createdAssessment.data.data
    const id=assessment["_id"]
    const read=await funcs.readAssessment(id)
    const readAssessment=read.data.data   
    expect.assertions(1)
    return expect(readAssessment).toEqual(assessment)
})

test("Delete an existing assessment",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.deleteAssessment)).toBe('function')
})

test("Delete an existing assessment by id",async()=>{
    data={
        memberName: "Reem",
        expertName: "Aysha",
        educationalOrg:"GUC",
        phoneNumber: 01234567,
        daysAvailable: "sunday, monday, tuesday"
        }
    const createdAssessment=await funcs.createAssessments(data)
    const assessment= createdAssessment.data.data
    const id=assessment["_id"]
    const read=await funcs.readAssessment(id)
    const readAssessment=read.data.data   
    expect.assertions(1)
    return expect(readAssessment).toEqual(assessment)
})



test('testing that get all works', async () => {
    expect.assertions(7)
    const response1 =  await funcs.getassessments()
    await funcs.createAssess(
        {
          memberName: "Reem",
          expertName: "Aysha",
          educationalOrg:"GUC",
          phoneNumber: 01234567,
          daysAvailable: "sunday, monday, tuesday"
          

        })  
 
    const response =  await funcs.getassessments()
  const l = response1.data.data.length+1 
    expect(response.data.data.length).toBe(l)
    expect(response.data.data[l-1].memberName).toEqual('Reem')
    expect(response.data.data[l-1].expertName).toEqual('Aysha')
    expect(response.data.data[l-1].educationalOrg).toEqual('GUC')
    expect(response.data.data[l-1].phoneNumber).toEqual(01234567)
    expect(response.data.data[l-1].daysAvailable).toEqual('sunday, monday, tuesday')
    expect(response.data.data[l-1].location).toEqual('GUC')
    });

test("Create an Assessment exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.createAssessment)).toBe('function')
})

 test("Create an Assessment",async()=>{
    data={
      memberName: "Ali",
      expertName: "Slim",
      educationalOrg:"GUC",
      phoneNumber: 0123456,
      daysAvailable: "sunday, thursday"
        }
    const createdAssessment=await funcs.createAssessment(data)
    const assessment= createdAssessment.data.data
    const id=assessment["_id"]
    return expect(assessment).toMatchObject(data)
})

test('Testing that create works for Assessment', async () => {
    expect.assertions(6)
    const l = (await funcs.getassessments()).data.data.length
    await funcs.createAssess({
      memberName: "Ahmad",
      expertName: "Mervat",
      educationalOrg:"GUC",
      phoneNumber: 0123456,
      daysAvailable: "saturday"
        })  
    const response =  await funcs.getassessments()

    expect(response.data.data[l].memberName).toEqual('Ahmad')
    expect(response.data.data[l].expertName).toEqual('Mervat')
    expect(response.data.data[l].educationalOrg).toEqual('GUC')
    expect(response.data.data[l].phoneNumber).toEqual(0123456)
    expect(response.data.data[l].daysAvailable).toEqual('saturday')
    expect(response.data.data[l].location).toEqual('GUC')
    })

    test('Testing that an update works for Assessment', async ()=>{
        expect.assertions(6)
        await funcs.createAssess({
          memberName: "Ahmad",
          expertName: "Mervat",
          educationalOrg:"GUC",
          phoneNumber: 0123456,
          daysAvailable: "saturday, sunday, monday"
           })  
        const response =  await funcs.getassessments()
        const l = response.data.data.length
        await funcs.updateAssess(response.data.data[l-1]._id,{
          memberName: "Ahmad Ali",
          expertName: "Mervat Abo-ElKheer",
          educationalOrg:"GUCB",
          phoneNumber: 0223456,
          daysAvailable: "saturday, thursday, friday"
           })
        const response2 =  await funcs.getassessments()
        const l2 =  response2.data.data.length
        expect(response2.data.data[l2-1].memberName).toEqual('Ahmad Ali')
        expect(response2.data.data[l2-1].expertName).toEqual('Mervat Abo-ElKheer')
        expect(response2.data.data[l2-1].educationalOrg).toEqual('GUCB')
        expect(response2.data.data[l2-1].phoneNumber).toEqual(0223456)
        expect(response2.data.data[l2-1].daysAvailable).toEqual('saturday, thursday, friday')
      })
/////////////////////////////////////////
      test('Testing that update does not work with wrong data for Assessment', async ()=>{
        expect.assertions(6)

        await funcs.createAssess({
          memberName: "Ahmad",
          expertName: "Mervat",
          educationalOrg:"GUC",
          phoneNumber: 0123456,
          daysAvailable: "saturday, sunday, monday"
           })  
        const response =  await funcs.getassessments()
        const l = response.data.data.length
        await funcs.updateAssess(response.data.data[l-1]._id,{
           memberName: 'Ahmad ten',
           expertName: 'Slim',
           phoneNumber: 01245 
           })
        const response2 =  await funcs.getassessments()
        expect(response2.data.data[l-1].memberName).toEqual('Ahmad')    
        expect(response2.data.data[l-1].expertName).toEqual('Aysha')
        expect(response2.data.data[l-1].educationalOrg).toEqual('GUC')
        expect(response2.data.data[l-1].phoneNumber).toEqual(012456)
        expect(response2.data.data[l-1].daysAvailable).toEqual('saturday, sunday, monday')
      })


      test('Testing that delete works for assessments', async ()=>{
        expect.assertions(1)
        await funcs.createAssess({
          memberName: "Ali",
          expertName: "Slim",
          educationalOrg:"GUC",
          phoneNumber: 0123456,
          daysAvailable: "sunday, thursday"
           }) 

        const response =  await funcs.getassessments()
        const l = response.data.data.length
        await funcs.deleteAssess(response.data.data[l-1]._id)
        const response2 =  await funcs.getassessments()
        expect(response2.data.data[l-1]).toEqual(undefined)
      })

       test('Testing that get works for assessments', async () => {
        expect.assertions(6)
       await funcs.createAssess( {
          memberName: "Ali",
          expertName: "Slim",
          educationalOrg:"GUC",
          phoneNumber: 0123456,
          daysAvailable: "sunday, thursday"

        })  
       const response =  await funcs.getassessments()
       const l = response.data.data.length
        const response1 =  await funcs.getassessments(response.data.data[l-1]._id)
        expect(response1.data.data.memberName).toEqual('Ali')
        expect(response1.data.data.expertName).toEqual('Slim')
        expect(response1.data.data.phoneNumber).toEqual(0123456)
        expect(response1.data.data.daysAvailable).toEqual("sunday, thursday")
        expect(response1.data.data.educationalOrg).toEqual('GUC')
       });
