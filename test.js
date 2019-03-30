const funcs = require('./fn');
const axios = require('axios');

test('testing that get all works', async () => {
  expect.assertions(10)
  const response1 =  await funcs.getPartners()
  await funcs.createPartner({name: 'a', email: 'a@x.com', password: 'a1'})  
  await funcs.createPartner({name: 'b', email: 'b@x.com', password: 'b1'})  
  await funcs.createPartner({name: 'c', email: 'c@x.com', password: 'c1'})  
  const response =  await funcs.getPartners()
  const l = 3 + response1.data.data.length
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-3].name).toEqual('a')
  expect(response.data.data[l-3].email).toEqual('a@x.com')
  expect(response.data.data[l-3].password).toEqual('a1')
  expect(response.data.data[l-2].name).toEqual('b')
  expect(response.data.data[l-2].email).toEqual('b@x.com')
  expect(response.data.data[l-2].password).toEqual('b1')
  expect(response.data.data[l-1].name).toEqual('c')
  expect(response.data.data[l-1].email).toEqual('c@x.com')
  expect(response.data.data[l-1].password).toEqual('c1')
  
  });


