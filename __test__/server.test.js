'use strict';

const { app } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server Test', () => {

  // Check if server is alive

  test('/person', async () => {
    const response = await mockRequest.get('/');
    expect(response.text).toBe('Server is Up & Running!');
  });

  // Check if 404 is handled 

  test('Should respond with 404 status on an invalid method', async () => {
    const response = await mockRequest.get('/boo');
    expect(response.status).toBe(404);
  });

});