//const funcs = require('./fn');


// test('get not Working', () => {
//     expect('team').not.toMatch(/I/);
//   });
  //expect db msh zai eli tal3

  test(`get not working`, async () => {
    const job =  await Job.find()
    expect({data: job}).not.toMatch(Response.data)
  });
