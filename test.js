const funcs = require('./fn');
const axios = require('axios');

test('testing that get all works', async () => {
  expect.assertions(8)
  const response1 =  await funcs.getJobs()
  await funcs.createJob({
    title:'GGQQAkkkkkkkkkA',
    location:'Cairo',
    salary:'9000',  
    dailyhours:'9',
    description:'kkkkkkkkkkk',
    startdate:'1998-10-1',
    enddate:'2010-9-10',
    state:'open',
   partner:'5c9673e3a7f0f43f641386de'
  })  
  
  const response =  await funcs.getJobs()
  const l = response1.data.data.length+1
  expect(response.data.data.length).toBe(l)
  expect(response.data.data[l-1].title).toEqual('GGQQAkkkkkkkkkA')
  expect(response.data.data[l-1].location).toEqual('Cairo')
  expect(response.data.data[l-1].salary).toEqual(9000)
  expect(response.data.data[l-1].dailyhours).toEqual(9)
  expect(response.data.data[l-1].description).toEqual('kkkkkkkkkkk')
  expect(response.data.data[l-1].state).toEqual('open')
  expect(response.data.data[l-1].partner).toEqual('5c9673e3a7f0f43f641386de')
  
  });

  test('testing get job by id', async () => {
    expect.assertions(7)
   await funcs.createJob({
    title:'GGQQAkkkkkkkkkA',
    location:'Cairo',
    salary:'9000',  
    dailyhours:'9',
    description:'kkkkkkkkkkk',
    startdate:'1998-10-1',
    enddate:'2010-9-10',
    state:'open',
   partner:'5c9673e3a7f0f43f641386de'
    })  
   const response =  await funcs.getJobs()
   const l = response.data.data.length
    const response1 =  await funcs.getJob(response.data.data[l-1]._id)
    expect(response1.data.data[l-1].title).toEqual('GGQQAkkkkkkkkkA')
    expect(response1.data.data[l-1].location).toEqual('Cairo')
    expect(response1.data.data[l-1].salary).toEqual(9000)
    expect(response1.data.data[l-1].dailyhours).toEqual(9)
    expect(response1.data.data[l-1].description).toEqual('kkkkkkkkkkk')
    expect(response1.data.data[l-1].state).toEqual('open')
    expect(response1.data.data[l-1].partner).toEqual('5c9673e3a7f0f43f641386de')
   });

   test('testing job creation', async () => {
    expect.assertions(7)
    const l = (await funcs.getJobs()).data.data.length
    await funcs.createJob({
      title:'sasa',
      location:'Cairo',
      salary:'9000',  
      dailyhours:'9',
      description:'kkkkkkkkkkk',
      startdate:'1998-10-1',
      enddate:'2010-9-10',
      state:'open',
     partner:'5c9673e3a7f0f43f641386de'
    })  
    const response =  await funcs.getJobs()
    expect(response.data.data[l].title).toEqual('sasa')
    expect(response.data.data[l].location).toEqual('Cairo')
    expect(response.data.data[l].salary).toEqual(9000)
    expect(response.data.data[l].dailyhours).toEqual(9)
    expect(response.data.data[l].description).toEqual('kkkkkkkkkkk')
    expect(response.data.data[l].state).toEqual('open')
    expect(response.data.data[l].partner).toEqual('5c9673e3a7f0f43f641386de')
    });

    test('testing job updated', async ()=>{
      expect.assertions(7)
      await funcs.createJob({
        title:'sasa',
        location:'Cairo',
        salary:'9000',  
        dailyhours:'9',
        description:'kkkkkkkkkkk',
        startdate:'1998-10-1',
        enddate:'2010-9-10',
        state:'open',
       partner:'5c9673e3a7f0f43f641386de'
      })  
      const response =  await funcs.getJobs()
      const l = response.data.data.length
      await funcs.updateJob(response.data.data[l-1]._id,{
        title:'sasaaaaaaaaa',
      location:'Cairoooo',
      salary:'9000000',  
      dailyhours:'10',
      description:'kkkkkkkeeeekkkk',
      startdate:'1998-1-10',
      enddate:'2010-8-11',
      state:'closed',
     partner:'5c9673e3a7f0f43f641386de'
      })
      const response2 =  await funcs.getJobs()
      const l2 =  response2.data.data.length
      expect(response2.data.data[l2-l].title).toEqual('sasaaaaaaaaa')
      expect(response2.data.data[l2-l].location).toEqual('Cairoooo')
      expect(response2.data.data[l2-l].salary).toEqual(9000000)
      expect(response2.data.data[l2-l].dailyhours).toEqual(10)
      expect(response2.data.data[l2-l].description).toEqual('kkkkkkkeeeekkkk')
      expect(response2.data.data[l2-l].state).toEqual('closed')
      expect(response2.data.data[l2-l].partner).toEqual('5c9673e3a7f0f43f641386de')
  
    });
    test('testing job deletion', async ()=>{
      expect.assertions(1)
      await funcs.createJob({
        title:'sasaaaaaaaaa',
      location:'Cairoooo',
      salary:'9000000',  
      dailyhours:'10',
      description:'kkkkkkkeeeekkkk',
      startdate:'1998-1-10',
      enddate:'2010-8-11',
      state:'closed',
     partner:'5c9673e3a7f0f43f641386de'
      })  
      const response =  await funcs.getJobs()
      const l = response.data.data.length
      await funcs.deleteJob(response.data.data[l-1]._id)
      const response2 =  await funcs.getJobs()
      expect(response2.data.data[l-1]).toEqual(undefined)
    });