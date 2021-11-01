'use strict';

const { app } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Validator Test', () => {

  // Check if /person works fine 

  test('/person', async () => {
    const response = await mockRequest.get('/person?name=bayan');
    expect(response.status).toBe(200);
  });

  // Check if validation error handling is working

  test('should respond with 500 on an error', async () => {
    const response = await mockRequest.get('/person?name');
    expect(response.status).toBe(500);
  });

});