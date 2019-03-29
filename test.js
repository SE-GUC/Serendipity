const fn = require('./fn')

// test('get method',() => {
    
// })

test('First book should be Crime and Punishment', async () => {
    // expect.assertions(1)
    const response =  await fn.getUser();
    console.log(response)
    console.log(fn)
    expect(response.title).toEqual('ha')
  });

test ('add',()=>
{
  expect(fn.add(2,3)).toBe(5);
});