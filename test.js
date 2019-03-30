const funcs = require('./fn');
const axios = require('axios');

  test('testing that get all works for partners', async () => {
    expect.assertions(4)
    const response1 =  await funcs.getPartners()
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l =  response1.data.data.length +1
    expect(response.data.data.length).toBe(l)
    expect(response.data.data[l-1].name).toEqual('a')
    expect(response.data.data[l-1].email).toEqual('a@x.com')
    expect(response.data.data[l-1].password).toEqual('a1')
  });

  test('testing that get works for partners', async () => {
     expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
     const response1 =  await funcs.getPartner(response.data.data[l-1]._id)
     expect(response1.data.name).toEqual('a')
     expect(response1.data.email).toEqual('a@x.com')
     expect(response1.data.password).toEqual('a1')
    });
  

  test('testing that create works for partners', async () => {
    expect.assertions(3)
    const l = (await funcs.getPartners()).data.data.length
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    expect(response.data.data[l].name).toEqual('a')
    expect(response.data.data[l].email).toEqual('a@x.com')
    expect(response.data.data[l].password).toEqual('a1')
    });
    
  test('testing that update works for partners', async ()=>{
    expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.updatePartner(response.data.data[l-1]._id,{name: 'm', email: 'm@x.com', password: 'm1'})
    const response2 =  await funcs.getPartners()
    const l2 =  response2.data.data.length
    expect(response2.data.data[l2-1].name).toEqual('m')
    expect(response2.data.data[l2-1].email).toEqual('m@x.com')
    expect(response2.data.data[l2-1].password).toEqual('m1')

  });

  test('testing that delete works for partners', async ()=>{
    expect.assertions(1)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.deletePartner(response.data.data[l-1]._id)
    const response2 =  await funcs.getPartners()
    expect(response2.data.data[l-1]).toEqual(undefined)
  });

  test('testing that create doesnt work with wrong data for partners', async()=>{
    expect.assertions(1)
    const l = (await funcs.getPartners()).data.data.length
    await funcs.createPartner({name: 'a', email: '123'})  
    const response =  await funcs.getPartners()
    expect(response.data.data[l]).toEqual(undefined)
  })

  
  test('testing that update doesnt work with wrong data for partners', async ()=>{
    expect.assertions(3)
    await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
    const response =  await funcs.getPartners()
    const l = response.data.data.length
    await funcs.updatePartner(response.data.data[l-1]._id,{name: 'm', email: '123'})
    const response2 =  await funcs.getPartners()
    expect(response2.data.data[l-1].name).toEqual('a')
    expect(response2.data.data[l-1].email).toEqual('a@x.com')
    expect(response2.data.data[l-1].password).toEqual('a1')

  });  




