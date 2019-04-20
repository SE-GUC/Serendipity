const JwtStrategy = require('passport-jwt').Strategy
 const ExtractJwt = require('passport-jwt').ExtractJwt
 const mongoose = require('mongoose')
 const bcrypt= require('bcryptjs');
 const UserE = mongoose.model('educationalOrganizations')//login//trial
 const UserM = mongoose.model('members')//trial
 const UserP = mongoose.model('partners')//trial
 const UserA = mongoose.model('admins')//trial
 const tokenKey = require('./keys').secretOrKey

 let opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
 opts.secretOrKey = tokenKey

 module.exports = passport => {
     //opt => options email , password
     passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
        const currentUserE = await UserE.findById(jwtPayload.id)//trial
        const currentUserM = await UserM.findById(jwtPayload.id)//trial
        const currentUserP = await UserP.findById(jwtPayload.id)//trial
        const currentUserA = await UserA.findById(jwtPayload.id)//trial
       //
    //   { id: user.id,
    //    name: user.name,
    //    email: user.email,
    //   }
       //
        if(currentUserE) return done(null, { id: currentUserE._id,
                                            name: currentUserE.name,
                                            email: currentUserE.email,
                                        })//trial
        if(currentUserM) return done(null,{ id: currentUserM._id,
                                             name: currentUserM.name,
                                             email: currentUserM.email,
                                       })//trial
        if(currentUserP) return done(null,{ id: currentUserP._id,
                                       name: currentUserP.name,
                                       email: currentUserP.email,
                                 })//trial
        if(currentUserA) return done(null,{ id: currentUserA._id,
                                       name: currentUserA.name,
                                       email: currentUserA.email,
                                     })//trial
        return done(null,false,{message:'That email is not registered'})
     }))
     //trial
    //  passport.serializeUser((user, done)=> {
    //     done(null, user.id);
    //   });
      
    //   passport.deserializeUser((id, done) =>{
    //     User.findById(id, (err, user) =>{
    //       done(err, user);
    //     });
    //   });
      //tria;
 }
 //login
 ////
 // passport.js

// const JWTStrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = mongoose.model('users');
// const opts = {};

// opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'secret';

// module.exports = passport => {
//     passport.use(new JWTStrategy(opts, (jwt_payload, done) => {
//         User.findById(jwt_payload.id)
//             .then(user => {
//                 if(user) {
//                     return done(null, user);
//                 }
//                 return done(null, false);
//             })
//             .catch(err => console.error(err));
//     }));
// }
 ////