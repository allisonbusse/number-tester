import isEven from '../is-even.js';
const test = QUnit.test;

test('is even', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const even = 2;
    const expected = true;


    //Act 
    // Call the function you're testing and set the result to a const
    const yourNumber = isEven(even);


    //Assert
    // What should the result be?
    assert.equal(yourNumber, expected);
});


test('is odd', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const odd = 3;
    const expected = false;


    //Act 
    // Call the function you're testing and set the result to a const
    const yourNumber = isEven(odd);


    //Assert
    // What should the result be?
    assert.equal(yourNumber, expected);
});