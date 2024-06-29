const getGrade = require('./gradeGenerator');

function testGetGrade() {
    const testCases = [
        { input: 85, expected: 'A' },
        { input: 75, expected: 'B' },
        { input: 55, expected: 'C' },
        { input: 45, expected: 'D' },
        { input: 35, expected: 'E' },
    ];

    testCases.forEach(({ input, expected }) => {
        const result = getGrade(input);
        console.log(`Input: ${input} - Expected: ${expected}, Got: ${result}`);
    });
}

testGetGrade();