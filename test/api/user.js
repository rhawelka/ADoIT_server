// process.env.NODE_ENV = "test"

// const User = require("../../models/User");
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../../app');
// const should = chai.should();
// chai.use(chaiHttp);
// const expect = chai.expect;

// //post user
// describe('user', () => {
//     describe('Create user', () => {
//         it('Returns a 200 response', () => {
//             const today = new Date();
//             return chai
//                 .request(app)
//                 .post('/register')
//                 .send({id:'0',first_name: 'John', last_name: 'doe', email: 'johndoe@example.com', password: 'password', created: today})
//                 .set('Content-Type', 'application/json')
//                 .set('Accept', 'application/json')
//                 .then(response => {
//                     // Now let's check our response
//                     expect(response)
//                         .to
//                         .have
//                         .status(200);
//                     done();
//                 })
//         });
//     });
// });