/*
 * mytest
 * Copyright (C)  2017
 *
 * test vor npm utilities
 *
 */


console.log("test1:  start");
// if test function expects second named argument it will be executed
// in async mode and test will be complete only after callback is called

exports['test test1a  my async foo'] = function(assert, done) {
  var http = require('http')
  var google = http.createClient(80, 'www.jeditoolkit.com')
  var request = google.request('GET', '/', {'host': 'www.jeditoolkit.com'})
  request.end()
  request.on('response', function (response) {
    assert.equal(response.statusCode, 302, 'must redirect') // will log result
    response.setEncoding('utf8')
    response.on('data', function (chunk) {
      assert.notEqual(chunk, 'helo world', 'must be something more inteligent')
      done() // telling test runner that we're done with this test
    })
  })
}

if (module == require.main) require('test').run(exports)


console.log("test1:  end");
