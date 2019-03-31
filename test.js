const funcs = require('./fn');
const axios = require('axios');
// testing get all works
test('testing that get all works', async () => {
  expect.assertions(5)
  const response1 =  await funcs.getAdmins()
  await funcs.createAdmin({
    username:'lamabts',
    full_name:'Lamaa Ihab',
    email:'lama89@gmail.com',  
    password:'fiodflkofdl$'
  
  })  
  //await funcs.createJob({name: 'b', email: 'b@x.com', password: 'b1'})  
  //await funcs.createJob({name: 'c', email: 'c@x.com', password: 'c1'})  
  const response =  await funcs.getAdmins()
  const l = response1.data.data.length+1
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].username).toEqual('lamabts')
  expect(response.data.data[l-1].full_name).toEqual('Lamaa Ihab')
  expect(response.data.data[l-1].email).toEqual('lama89@gmail.com')
  expect(response.data.data[l-1].password).toEqual('fiodflkofdl$')
 // expect(response.data.data[l-1].description).toEqual('kkkkkkkkkkk')
  //expect(response.data.data[l-1].startdate).toEqual('1998-10-1')
  //expect(response.data.data[l-1].enddate).toEqual('2010-9-10')
 // expect(response.data.data[l-1].state).toEqual('open')
 // expect(response.data.data[l-1].partner).toEqual('5c9673e3a7f0f43f641386de')
  
  });

// //test create works

test('testing that create works for admins', async () => {
    expect.assertions(4)
    const l = (await funcs.getAdmins()).data.data.length
    await funcs.createAdmin({username: 'lamaa87', email: 'a@x.com', password: 'a1eodjiofdldi$',full_name:'Lama fd'})  
    const response =  await funcs.getAdmins()
    expect(response.data.data[l].username).toEqual('lamaa87')
    expect(response.data.data[l].email).toEqual('a@x.com')
    expect(response.data.data[l].password).toEqual('a1eodjiofdldi$')
    expect(response.data.data[l].full_name).toEqual('Lama fd')
    });


//     // test that get by id works

    test('testing that get by id works for admins', async () => {
        // expect.assertions(4)
       await funcs.createAdmin({username: 'akdslfm98', email: 'a@x.com', password: 'a1fiofjfiodk$',full_name:'Lamaaa fr'})  
       const response =  await funcs.getAdmins()
       const l = response.data.data.length
        const response1 =  await funcs.getAdmin(response.data.data[l-1]._id)
        expect(response1.data.data.username).toEqual('akdslfm98')
        expect(response1.data.data.email).toEqual('a@x.com')
        expect(response1.data.data.password).toEqual('a1fiofjfiodk$')
        expect(response1.data.data.full_name).toEqual('Lamaaa fr')
       });


//        // test for update works
       test('testing that update works for admins', async ()=>{
        expect.assertions(4)
        await funcs.createAdmin({username: 'akdslfm96', email: 'a@x.com', password: 'a1fiofjfibdk$',full_name:'Lamaaa fk'})  
        //console.log("1")
        const response =  await funcs.getAdmins()
       // console.log("2")
        const l = response.data.data.length
        await funcs.updateAdmin(response.data.data[l-1]._id,{username: 'lamaazh2t', email: 'v@x.com', password: 'a1fiofffibdk$',full_name:'Lamaaa fd'})
       // console.log("3")
        const response2 =  await funcs.getAdmins()
       // console.log("4")
        const l2 =  response2.data.data.length
        expect(response2.data.data[l2-1].username).toEqual('lamaazh2t')
        expect(response2.data.data[l2-1].email).toEqual('v@x.com')
        expect(response2.data.data[l2-1].password).toEqual('a1fiofffibdk$')
        expect(response2.data.data[l2-1].full_name).toEqual('Lamaaa fd')
      });

//       // testing that delete works

      test('testing that delete works for admins', async ()=>{
        expect.assertions(1)
        await funcs.createAdmin({username: 'tae95', email: 'a@x.com', password: 'a1defdkljfmk$',full_name:'kim taehyung'})  
        const response =  await funcs.getAdmins()
        const l = response.data.data.length
        await funcs.deleteAdmin(response.data.data[l-1]._id)
        const response2 =  await funcs.getAdmins()
        expect(response2.data.data[l-1]).toEqual(undefined)
      });

//testing create doesnt work
      test('testing that create doesnt work with wrong data for admins', async()=>{
        expect.assertions(1)
        const l = (await funcs.getAdmins()).data.data.length
        await funcs.createAdmin({username: 'a', email: '123'})  
        const response =  await funcs.getAdmins()
        expect(response.data.data[l]).toEqual(undefined)
      })

      // testing update doesnt work
      test('testing that update doesnt work with wrong data for admins', async ()=>{
        expect.assertions(4)
        await funcs.createAdmin({username: 'a', email: 'a@x.com', password: 'a1rfijekfjrio$',full_name:'park jimin'})  
        const response =  await funcs.getAdmins()
        const l = response.data.data.length
        await funcs.updateAdmin(response.data.data[l-1]._id,{username: 'm', email: '123'})
        const response2 =  await funcs.getAdmins()
        expect(response2.data.data[l-1].username).toEqual('a')
        expect(response2.data.data[l-1].email).toEqual('a@x.com')
        expect(response2.data.data[l-1].password).toEqual('a1rfijekfjrio$')
        expect(response2.data.data[l-1].full_name).toEqual('park jimin')
    
      });  
    











