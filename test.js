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