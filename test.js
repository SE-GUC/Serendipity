const funcs = require('./EduOrgfn');
jest.setTimeout(1000000);
//test creat works
// afterAll(() => {
  
// });



test('testing that get all works', async () => {
  expect.assertions(5)
  const response1 =  await funcs.getEduOrg()
  await funcs.createEduOrg({userName:'uayyyyyyyyya', name: 'aaaaaaaaaa',  password: '123h45678', email: 'a@gmail.com'})    
  const response =  await funcs.getEduOrg()
  const l = 1 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].userName).toEqual('uayyyyyyyyya')
  expect(response.data.data[l-1].name).toEqual('aaaaaaaaaa')
  expect(response.data.data[l-1].email).toEqual('a@gmail.com')
  expect(response.data.data[l-1].password).toEqual('123h45678')
  
  
});
    test(`Create Edu Org`, async () => {
        expect.assertions(4) //this depends on how many expect I am using
        const l=(await funcs.getEduOrg()).data.data.length
        await funcs.createEduOrg({
          userName:'MMMM',
          name:'MMMMMMMM',
          password:"21323234",
          email:'MMMMMM@gg.com'
        })
        //const response =  await funcs.createEduOrg()
        const response =await funcs.getEduOrg();
        console.log(l)
        console.log(response.data.data.length)
        //4 expect -> assertions(4)
        expect(response.data.data[l].userName).toEqual('MMMM')
        expect(response.data.data[l].name).toEqual('MMMMMMMM')
        expect(response.data.data[l].password).toEqual('21323234')
        expect(response.data.data[l].email).toEqual('MMMMMM@gg.com')
        
      });

  
