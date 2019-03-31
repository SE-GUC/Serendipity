// const funcs = require('./EduOrgfn');

// //test creat works
// test(`Create Edu Org`, async () => {
//     expect.assertions(4) //this depends on how many expect I am using
//     const response =  await funcs.createEduOrg()
//     const l=(response.data.length)-1
//     //console to see and check data
//     console.log(response.data[l-1])
//     //4 expect -> assertions(4)
//     expect(response.data[l].userName).toEqual('GQA')
//     expect(response.data[l].name).toEqual('GGQQAA')
//     expect(response.data[l].password).toEqual('232323')
//     expect(response.data[l].email).toEqual('QGA@gg.com')
//   });

const funcs = require('./EduOrgfn');
jest.setTimeout(100000000);
//const axios = require('axios');

test('testing that get all works', async () => {
  expect.assertions(5)
  const response1 =  await funcs.getEduOrg()
  await funcs.createEduOrg({userName:'uaa', name: 'a',  password: '12345678', email: 'a@gmail.com'})    
  const response =  await funcs.getEduOrg()
  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].userName).toEqual('uaa')
  expect(response.data.data[l-1].name).toEqual('a')
  expect(response.data.data[l-1].email).toEqual('a@gmail.com')
  expect(response.data.data[l-1].password).toEqual('12345678')
  await funcs.deleteEduOrg(response.data.data[l-1]._id)


  });

  test('testing that delete works', async()=>{
    expect.assertions(1)
    await funcs.createEduOrg({userName:'aaa', name: 'a', email: 'a@gmail.com', password: '12345678'})  
    var response =  await funcs.getEduOrg()
    var l = response.data.data.length
    await funcs.deleteEduOrg(response.data.data[l-1]._id)
    response =  await funcs.getEduOrg()
    expect(response.data.data.length).toEqual(l-1)

    //expect(response2.data.data[l-1]).toEqual(undefined)
  });

