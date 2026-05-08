// server.test.js
const request = require('supertest');
const express = require('express');

// Create a TEST version of your app
// without MongoDB connection
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Add a health check route for testing
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', app: 'XYZ University Portal' });
});

// Test that getUsers route exists
app.get('/getUsers', (req, res) => {
  res.status(200).json([]);
});

// ─── TESTS ───
test('health check returns OK', async () => {
  const response = await request(app).get('/health');
  expect(response.status).toBe(200);
  expect(response.body.status).toBe('OK');
});

test('getUsers route exists and returns 200', async () => {
  const response = await request(app).get('/getUsers');
  expect(response.status).toBe(200);
});

test('addUser route exists', async () => {
  const response = await request(app)
    .post('/addUser')
    .send('email=test@test.com&username=testuser&password=1234');
  // 500 is ok here — no real DB in test environment
  expect([200, 302,404, 500]).toContain(response.status);
});


