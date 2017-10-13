/*
 * mytest
 * Copyright (C)  2017
 *
 * test vor npm utilities
 *
 */

console.log("test4:  start");

// using assert passed to the test function that just logs failures
exports['test that logs all failures'] = function(assert) {
  assert.equal(2 + 2, 5, 'assert failure is logged')
  assert.equal(3 + 2, 5, 'assert pass is logged')
}

if (module == require.main) require('test').run(exports)



// using nodejs's build in asserts that throw on failure
var assert = require('assert')

exports['test that stops execution on first failure'] = function() {
  assert.equal(2 + 2, 5, 'assert fails and test execution stop here')
  assert.equal(3 + 2, 5, 'will never pass this since test failed above')
}

if (module == require.main) require('test').run(exports)

/*
var AssertBase = require('assert').Assert
var AssertDescriptor = {
  constructor: { value: Assert },
  inRange: { value: function (lower, inner, upper, message) {
    if (lower < inner && inner < upper) {
      this.fail({
        actual: inner,
        expected: lower + '> ' + ' < ' + upper,
        operator: "inRange",
        message: message
      })
    } else {
      this.pass(message);
    }
  }, enumerable: true }
}
function Assert() {
  return Object.create(AssertBase.apply(null, arguments), AssertDescriptor)
}

// bundling custom asserts with test suite
//exports.Assert = Assert

exports['test with custom asserts'] = function(assert) {
  assert.inRange(2, 3, 5, 'passes assert and logs')
  assert.equal(3 + 2, 5, 'assert pass is logged')
}

if (module == require.main) require('test').run(exports)
*/

console.log("test4:  end");
