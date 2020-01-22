// IMPORT MODULES under test here:
import checkResult from '../check-result.js';

    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result


const test = QUnit.test;

// Rock test
test('rock ties with rock and generates draw', function(assert) {
    const player = 'rock'; 
    const computer = 'rock';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'draw';
    assert.equal(actualValue, expectedValue);
});

test('rock beats scissors and generates win', function(assert) {
    const player = 'rock'; 
    const computer = 'scissors';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'win';
    assert.equal(actualValue, expectedValue);
});

test('rock loses to paper and generates lose', function(assert) {
    const player = 'rock'; 
    const computer = 'paper';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'lose';
    assert.equal(actualValue, expectedValue);
});


// Paper test
test('paper ties with paper and generates draw', function(assert) {
    const player = 'paper'; 
    const computer = 'paper';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'draw';
    assert.equal(actualValue, expectedValue);
});

test('paper beats rock and generates win', function(assert) {
    const player = 'paper'; 
    const computer = 'rock';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'win';
    assert.equal(actualValue, expectedValue);
});

test('paper loses to scissors and generates lose', function(assert) {
    const player = 'paper'; 
    const computer = 'scissors';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'lose';
    assert.equal(actualValue, expectedValue);
});


// Scissors test
test('scissors ties with scissors and generates draw', function(assert) {
    const player = 'scissors'; 
    const computer = 'scissors';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'draw';
    assert.equal(actualValue, expectedValue);
});

test('scissors beats paper and generates win', function(assert) {
    const player = 'scissors'; 
    const computer = 'paper';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'win';
    assert.equal(actualValue, expectedValue);
});

test('scissors loses to rock and generates lose', function(assert) {
    const player = 'scissors'; 
    const computer = 'rock';
    const actualValue = checkResult(player, computer);
    const expectedValue = 'lose';
    assert.equal(actualValue, expectedValue);
});
