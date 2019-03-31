const funcs = require('./fn');
const axios = require('axios');
//test getMemberbyID passes
test(`Get username = hager`, async () => {
    expect.assertions(1);  //this depends on how many expect I am using
    const response =  await funcs.getMemberByID('5ca09a87fffaeb0894ec89ae');
    expect(response.data.data.userName).toEqual('hager')
});

beforeAll(async () => {
    await new Course({
      _id: mongoose.Types.ObjectId(),
      skills: [
        "coding"
    ],
    userName: "hager",
    password: "AH!djjj122",
    availableDailyHours: 8,
    name: "Hager",
    email: "hager@gmail.com",
    birthDate: "1998-02-10T00:00:00.000Z",
    location: "Cairo"
    }).save();
    return "one added"
  })
// create a new member passes
test('create a new member' , async() => {
     expect.assertions(5);
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
    expect ( newmembers[newmembers.length-1].userName).toEqual("Hamada")
    expect ( newmembers[newmembers.length-1].name).toEqual("hamada")
    expect ( newmembers[newmembers.length-1].email).toEqual("HamadaH@gmaail.com")
    expect ( newmembers[newmembers.length-1].location).toEqual("Kenz")
    expect( newmembers.length - members.length).toEqual(1);
});

// update a member
test ('update member' , async() => {
    try {
expect.assertions(1);
const random = Member.findOne({});
const id = random.id ;
var member = await Member.findByID(id)
console.log(member.data.data.name)
const  req = {
    "name" : "Mohammad Ashraf"
};
const updated = await funcs.updateMember(id, req);
console.log(updated)
expect(updated.data.data.name).toEqual("Mohammad Ashraf")
    }
    catch(e){
console.log(e)
    }
});
// delete 
test ('delete hager', async ()=>{
    try{
expect.assertions(2);
const random = Member.findOne({});
const id = random.id ;
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