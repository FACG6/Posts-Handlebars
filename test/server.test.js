const test = require("tape");
const supertest = require('supertest')
const app = require('../src/app.js')

test("Testing test", t => {
  t.equal(1, 1, "Pass");
  t.end();
});
test("testing for homePage for statuscode 200", t => {
  supertest(app)
    .get('/')
    .expect(302)
    .expect('content-type', "text/plain; charset=utf-8")
    .end((err, res) => {
      if (err) t.error(err);
      t.end()
    })
})

test('test for signup route', (t) => {
  supertest(app)
    .get('/signup')
    .expect(200)
    .expect("content-type", "text/html; charset=utf-8")
    .end((err, response) => {
      if (err) t.error(err);
      t.equal(response.text.includes('<nav class="nav">'), true, 'expected <nav class="nav">');
      t.end();
    });
})

test('test for signin route', (t) => {
  supertest(app)
    .get('/signin')
    .expect(200)
    .expect("content-type", "text/html; charset=utf-8")
    .end((err, response) => {
      if (err) t.error(err);
      t.equal(response.text.includes('<span class="logo">Posts-Handlebars</span>'), true, '<span class="logo">Posts-Handlebars</span>');
      t.end();
    });

});

test('test for profile route', (t) => {
  supertest(app)
    .get('/profile')
    .expect(200)
    .expect("content-type", "text/html; charset=utf-8")
    .end((err, response) => {
      if (err) t.error(err);
      t.equal(response.text.includes('<div class="posts-div">'), true, 'expected <div class="posts-div">');
      t.end();
    });

});

test('test for signup route', (t) => {
  supertest(app)
    .get('/error')
    .expect(404)
    .expect("content-type", "text/html; charset=utf-8")
    .end((err, response) => {
      if (err) t.error(err);
      t.equal(response.text.includes('<section class="error">'), true, 'expected <section class="error">');
      t.end();
    });
})

