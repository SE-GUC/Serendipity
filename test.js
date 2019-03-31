const funcs = require('./EduOrgfn');
jest.setTimeout(1000000);
//test creat works
// afterAll(() => {
  
// });
test(`Create Edu Org`, async () => {
    expect.assertions(4) //this depends on how many expect I am using
    const response =  await funcs.createEduOrg()
    const l=(response.data.length)-1
    //console to see and check data
    console.log(response.data[l-1])
    //4 expect -> assertions(4)
    expect(response.data[l].userName).toEqual('YYA')
    expect(response.data[l].name).toEqual('YYYQAA')
    expect(response.data[l].password).toEqual('232323')
    expect(response.data[l].email).toEqual('YYGA@gg.com')
  });

  test(`Create Edu Org2`, async () => {
    expect.assertions(4) //this depends on how many expect I am using
    const response =  await funcs.createEduOrg2()
    const l=(response.data.length)-1
    //console to see and check data
    console.log(response.data[l-1])
    //4 expect -> assertions(4)
    expect(response.data[l].userName).toEqual('YYAN')
    expect(response.data[l].name).toEqual('YYYQAAN')
    expect(response.data[l].password).toEqual('2132323')
    expect(response.data[l].email).toEqual('NYYGA@gg.com')
  });
  // test('create Edu Org2',async()=>{
  //   expect.assertions(4)

// const response  =await funcs.createEduOrg()
//     const l=(response.data.length)-1
//     expect(response.data[l]).toEqual(          // 1
//       expect.arrayContaining([      // 2
//         expect.objectContaining({   // 3
//           username: 'YYA'               // 4
//         })
//       ])
//     )
//   })

//   test("read a masterclass exists",async()=>{
//     expect.assertions(1)
//     return expect(typeof(funcs.readMaster)).toBe('function')
// })
//yara moh. by id wont work
//  test("read a masterclass by id",async()=>{
//     // data={
//     //     userName: "YOYOOOOOZZZ",
//     //     name: "5 months",
//     //     email:"gg@df.com",
//     //     password: 5000
        
//     //     }
//     const createdMaster=await funcs.createMaster({
//       userName: "YOYOOOOOZZZ",
//       name: "5 months",
//       email:"gg@df.com",
//       password: 5000
      
//     })
//     console.log(createdMaster)
//     const master= createdMaster.data.data
//     const id=master["_id"]
//     const read=await funcs.readMaster(id)
//     const readMaster=read.data.data   
//     expect.assertions(1)
//     return expect(readMaster).toEqual(master)
// })