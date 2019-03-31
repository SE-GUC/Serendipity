const funcs = require('./fn');
const axios = require('axios');

//test getMemberbyID passes
test(`Get username = hager`, async () => {
    expect.assertions(1);  //this depends on how many expect I am using
    const response =  await funcs.getMemberByID('5ca09a87fffaeb0894ec89ae');
    expect(response.data.data.userName).toEqual('hager')
});


// create a new member fails
test('create a new member' , async() => {
     expect.assertions(1);
     const req ={
         "skills": ["coding"],
       "userName": "Hamada",
         "availableDailyHours": 8,
         "name": "hamada",
         "location": "Kenz",
         "email": "HamadaH@gmaail.com",
         "birthDate": "2002-02-04T22:00:00.000Z"
 }
     const members = await Member.find();
      await funcs.createMember(req)
     const newmembers = await Member.find()
    // console.log(newmembers.length);
     //console.log(members.length)
     expect( newmembers.length - members.length).toEqual(0);
 });



// update a member
test ('update member' , async() => {
expect.assertions(1);
const id = "5ca0e39193e31615f45b2599" ;
var member = await axios.get('http://localhost:3000/api/members/'+id)
console.log(member.data.data.name)
const  req = {
    "name" : "Mohammad Ashraf"
};
const updated = await funcs.updateMember(id, req);
console.log(updated)
expect(updated.data.data.name).toEqual("Mohammad Ashraf")
});

// delete 
test ('delete hager', async ()=>{
expect.assertions(1);
const members = await Member.find();
await funcs.deleteMember("5ca09a87fffaeb0894ec89ae")
const newmembers = await Member.find();
expect( members.length - newmembers.length).toEqual(1);
});
