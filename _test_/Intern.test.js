const Intern = require('../lib/Intern');
const intern = new Intern( 'Alex', '5891024','alexrodiguez19@gmail.com', 'University of Florida');

// test for the Manager parameters
test('test if we can constructor values for the intern,', () => {
    expect(intern.name).toBe('Alex');
    expect(intern.id).toBe('5891024');
    expect(intern.email).toBe('alexrodiguez19@gmail.com');
    expect(intern.school).toBe('University of Florida');
});

test('test if we can getName() method', () => {
    expect(intern.getName()).toBe('Alex');
});

test('test if we can getId() method', () => {
    expect(intern.getId()).toBe('5891024');
});


test('test if we can getEmail() method', () => {
    expect(intern.getEmail()).toBe('alexrodiguez19@gmail.com');
});

test('test if we can getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we can getSchool() method', () => {
    expect(intern.getSchool()).toBe('University of Florida')
});