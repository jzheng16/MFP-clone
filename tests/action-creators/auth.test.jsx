import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Example:

// mock.onGet('/api/auth/login').reply(200, {
//   id:
// })
