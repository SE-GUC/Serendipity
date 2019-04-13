const JwtStrategy = require('passport-jwt').Strategy
 const ExtractJwt = require('passport-jwt').ExtractJwt
 const mongoose = require('mongoose')
 const UserE = mongoose.model('educationalOrganizations')//login//trial
 const UserM = mongoose.model('members')//trial
 const UserP = mongoose.model('partners')//trial
 const UserA = mongoose.model('admins')//trial
 const tokenKey = require('./keys').secretOrKey

 let opts = {};
 opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
 opts.secretOrKey = tokenKey

 module.exports = passport => {
     passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
        const currentUserE = await UserE.findById(jwtPayload.id)//trial
        const currentUserM = await UserM.findById(jwtPayload.id)//trial
        const currentUserP = await UserP.findById(jwtPayload.id)//trial
        const currentUserA = await UserA.findById(jwtPayload.id)//trial
        if(currentUserE) return done(null,currentUserE)//trial
        if(currentUserM) return done(null,currentUserM)//trial
        if(currentUserP) return done(null,currentUserP)//trial
        if(currentUserA) return done(null,currentUserA)//trial
        return done(null,false)
     }))
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