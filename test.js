const funcs = require('./fn');
const Member = require('./models/Member')
const mongoose = require('mongoose')
//jest.setTimeout(1000000);

beforeAll(async () => {
    const name = funcs.makeid(5) ;
    await new Member({
      _id: mongoose.Types.ObjectId(),
      skills: [
        "presentations"
    ],
    userName: name,
    password: name+"!@123",
    availableDailyHours: 8,
    name: name,
    email: name+"@gmail.com",
    birthDate: "2030-02-10T00:00:00.000Z",
    location: "Cairo"
    }).save();
    return "one added"
});


//test getMemberbyID passes
test(`Get username of a given ID`, async () => {
    expect.assertions(1);  //this depends on how many expect I am using
    const member = await Member.findOne({})
    const username = member.userName
    const response =  await funcs.getMemberByID(member._id);
    //console.log(response)
    expect(response.data.data.userName).toEqual(username)
});


// create a new member passes
test('create a new member' , async() => {
    const newmembername = funcs.makeid(5) ;
     expect.assertions(3);
     const req ={
         "skills": ["finance"],
        "userName": newmembername,
         "availableDailyHours": 8,
         "name": newmembername,
         password : newmembername+"@!1235",
         "location": "Nasr city",
         "email": newmembername+"@gmaail.com",
         "birthDate": "1990-08-10T22:00:00.000Z"
}
    const members = await Member.find();
  const newmember =  await funcs.createMember(req)
 // console.log(newmember)
    const newmembers = await Member.find()
    expect( newmembers.length - members.length).toEqual(1);
    expect ( newmember.data.data.userName).toEqual(newmembername)
    expect ( newmember.data.data.email).toEqual(newmembername+"@gmaail.com")
   
});



// update a member
test ('update member' , async() => {
expect.assertions(1);
const member = await Member.findOne({});
const id = member._id
//console.log(id)
const updated = await funcs.updateMember(id, {'name' : 'updated name again'});
//console.log(updated.data.name)
const upd = await Member.findById(id)
//console.log(upd.name)
expect(upd.name).toEqual("updated name again")
});


 //delete 
test ('delete a member', async ()=>{
    try{
expect.assertions(2);
const member = Member.findOne({});
const id = member.id ;
const members = await Member.find();
const deleted = await funcs.deleteMember(id)
const newmembers = await Member.find();
expect( members.length - newmembers.length).toEqual(1);
expect( deleted.data.data.id).toBe(id)
}
catch(e){
console.log(e)
}
});
