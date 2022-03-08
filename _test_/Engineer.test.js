const Engineer = require('../lib/Engineer');
const engineer = new Engineer( 'Alex', '5891024','alexrodiguez19@gmail.com', 'https://github.com/Alexander123');

// test for the Manager parameters
test('test if we can constructor values for the engineer,', () => {
    expect(engineer.name).toBe('Alex');
    expect(engineer.id).toBe('5891024');
    expect(engineer.email).toBe('alexrodiguez19@gmail.com');
    expect(engineer.github).toBe('https://github.com/Alexander123');
});

test('test if we can getName() method', () => {
    expect(engineer.getName()).toBe('Alex');
});

test('test if we can getId() method', () => {
    expect(engineer.getId()).toBe('5891024');
});


test('test if we can getEmail() method', () => {
    expect(engineer.getEmail()).toBe('alexrodiguez19@gmail.com');
});

test('test if we can getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test if we can getGithub() method', () => {
    expect(engineer.getGithub()).toBe('https://github.com/Alexander123')
});