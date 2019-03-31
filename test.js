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

test('testing that get all works', async () => {
  expect.assertions(6)
  const response1 =  await funcs.getEduOrg()
  await funcs.createEduOrg({userName:'uaa', name: 'a',  password: '12345678', email: 'a@gmail.com'})    
  const response =  await funcs.getEduOrg()
  const l = 1 + response1.data.data.length
  expect(response1.data.data.length).toBe(1)

  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].userName).toEqual('uaa')
  expect(response.data.data[l-1].name).toEqual('a')
  expect(response.data.data[l-1].email).toEqual('a@gmail.com')
  expect(response.data.data[l-1].password).toEqual('12345678')

  });

  
