/*
 * mytest
 * Copyright (C)  2017
 *
 * test vor npm utilities
 *
 */

console.log("testn1:  start");


// bundling custom asserts with test suite
//exports.Assert = Assert

exports['test testn1 with custom asserts'] = function(assert) {
  
  console.log("NN");
  assert.inRange(2, 3, 5, 'passes assert and logs')
  assert.equal(3 + 2, 5, 'assert pass is logged')
}

if (module == require.main) require('test').run(exports)




console.log("testn1:  end");
