const dateFormatYMD = require('./dateFormatFr');

test('create today date format YMD', () => {
    expect(dateFormatYMD(new Date())).toBe("5 Mai 2020");
});



