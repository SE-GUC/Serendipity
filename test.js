const funcs = require('./fn');
const axios = require('axios');
jest.setTimeout(10000000);
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
  test('Test getting a certain jobs ', async () => {
    try {
    
    const res = await funcs.getJobs()
    expect(res.data).toBeDefined()
    //expect(res.status).toEqual(200)
    
    const res2 = await funcs.getJob(res.data.data[res.data.data.length-1]._id)
    console.log(res2.data)
  
    
    expect(res2.data.data.title).toEqual('GGQQAkkkkkkkkkA')
    expect(res2.data.data.location).toEqual('Cairo')
    expect(res2.data.data.salary).toEqual(9000)
    expect(res2.data.data.dailyhours).toEqual(9)
    expect(res2.data.data.description).toEqual('kkkkkkkkkkk')
    expect(res2.data.data.state).toEqual('open')
    expect(res2.data.data.partner).toEqual('5c9673e3a7f0f43f641386de')
   
   
    }
  
    catch(error){
      
      console.log(error)
    
    } });
  
  

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
        title:'sasaupdating',
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
        title:'sasaaaaaaaaaupdated',
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
      expect(response2.data.data[l2-1].title).toEqual('sasaaaaaaaaaupdated')
      expect(response2.data.data[l2-1].location).toEqual('Cairoooo')
      expect(response2.data.data[l2-1].salary).toEqual(9000000)
      expect(response2.data.data[l2-1].dailyhours).toEqual(10)
      expect(response2.data.data[l2-1].description).toEqual('kkkkkkkeeeekkkk')
      expect(response2.data.data[l2-1].state).toEqual('closed')
      expect(response2.data.data[l2-1].partner).toEqual('5c9673e3a7f0f43f641386de')
  
    });
    test('testing that get by id does not work works', async () => {
      expect.assertions(1)
        expect(await funcs.getJob('xxxxxxxxxxxxxxxx').title).toEqual(undefined);
    
      });
    // test('testing job deletion', async ()=>{
    //   //const x = (await funcs.getJobs()).data.data.length
    //   expect.assertions(1)
    //   await funcs.createJob({
    //     title:'sasaaaaaaaaadeleted',
    //   location:'Cairoooo',
    //   salary:'9000000',  
    //   dailyhours:'10',
    //   description:'kkkkkkkeeeekkkk',
    //   startdate:'1998-1-10',
    //   enddate:'2010-8-11',
    //   state:'closed',
    //  partner:'5c9673e3a7f0f43f641386de'
    //   })  
    //   const response =  await funcs.getJobs()
    //   //const l = response.data.data.length
    //   await funcs.delete(response.data.data[response.data.data.length-1]._id)
    //   const response2 =  await funcs.getJob(response.data.data[response.data.data.length-1]._id)
    //   expect(response2.data.data.title).toEqual(undefined)
    // });

      // test('testing that delete works', async()=>{
      //   expect.assertions(1)
      //   await funcs.createJob({title:'lalaadeleted',location:'Cairoooo', salary:'9000000', dailyhours:'10',description:'kkkkkkkeeeekkkk',startdate:'1998-1-10',
      //   enddate:'2010-8-11',
      //   state:'closed',
      //  partner:'5c9673e3a7f0f43f641386de'
      //   })  
      //   const response =  await funcs.getJobs()
      //   const l = response.data.data.length
      //   await funcs.deleteJob(response.data.data[l-1]._id)
      //   response =  await funcs.getJobs()
      //   expect(response.data.data[l-1]).toEqual(undefined)
    
      // });

      //not working msh 3rfa leeh
      test('testing that delete works for jobs', async ()=>{
        expect.assertions(1)
      //   await funcs.createJob({title:'lalaadeleted33',location:'Cairoooo', salary:'9000000', dailyhours:'10',description:'kkkkkkkeeeekkkk',startdate:'1998-1-10',
      //   enddate:'2010-8-11',
      //   state:'closed',
      //  partner:'5c9673e3a7f0f43f641386de'
      //   })  
        const response =  await funcs.getJobs()
        const l = response.data.data.length
        await funcs.deleteJob(response.data.data[l-1]._id)
        const response2 =  await funcs.getJobs()
        expect(response2.data.data[l-1]).toEqual(undefined)
      });