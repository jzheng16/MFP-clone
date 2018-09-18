// /**
//  * @jest-environment node
//  */

// const request = require('supertest');
// const db = require('../../../db');
// const app = require('../../../server');

// const User = db.model('users');
// jest.setTimeout(15000);
// describe('User routes', () => {
//   beforeAll(() => db.sync({ force: true }));
//   afterAll(done => {
//     db.close(done);
//     // app.close(done);
//   });

//   it('signup should return the new user', done => {
//     const fakeUser = { email: 'fakeemail@gmail.com', password: 'hohoho', first_name: 'bobo', last_name: 'builder' };
//     return request(app)
//       .post('/api/auth/signup')
//       .send(fakeUser)
//       .set('Accept', 'application/json')
//       .expect(res => {
//         console.log('response??', res.body);
//         expect(res.body.email).toBe(fakeUser.email);
//       });
//   });
// });
