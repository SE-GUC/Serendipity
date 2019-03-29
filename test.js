const funcs = require('./EduOrgfn');

//test creat works
test(`Create Edu Org`, async () => {
    expect.assertions(4) //this depends on how many expect I am using
    const response =  await funcs.createEduOrg()
    const l=(response.data.length)-1
    //console to see and check data
    console.log(response.data[l-1])
    //4 expect -> assertions(4)
    expect(response.data[l].userName).toEqual('GQA')
    expect(response.data[l].name).toEqual('GGQQAA')
    expect(response.data[l].password).toEqual('232323')
    expect(response.data[l].email).toEqual('QGA@gg.com')
  });

  test("read a masterclass exists",async()=>{
    expect.assertions(1)
    return expect(typeof(funcs.readMaster)).toBe('function')
})
//yara moh. by id wont work
 test("read a masterclass by id",async()=>{
    // data={
    //     userName: "YOYOOOOOZZZ",
    //     name: "5 months",
    //     email:"gg@df.com",
    //     password: 5000
        
    //     }
    const createdMaster=await funcs.createMaster({
      userName: "YOYOOOOOZZZ",
      name: "5 months",
      email:"gg@df.com",
      password: 5000
      
    })
    console.log(createdMaster)
    const master= createdMaster.data.data
    const id=master["_id"]
    const read=await funcs.readMaster(id)
    const readMaster=read.data.data   
    expect.assertions(1)
    return expect(readMaster).toEqual(master)
})