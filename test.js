const funcs = require('./fn');
//const Workshop = require('/models/Workshop')

//test creat works
test(`update workshop`, async () => {
    expect.assertions(1) //this depends on how many expect I am using
    const response =  await funcs.updateWorkshop()
    console.log(response)
    const l=(response.data.length)
    //console to see and check data
    console.log(response.data[l])
    //4 expect -> assertions(4)
    expect(response.data[l].eduOrganisation).toEqual('GQA')
    // expect(response.data[l].name).toEqual('GGQQAA')
    // expect(response.data[l].password).toEqual('232323')
    // expect(response.data[l].email).toEqual('QGA@gg.com')
  });

