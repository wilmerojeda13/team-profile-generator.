const Manager = require('../lib/Manager');
const manager = new Manager( 'Alex', '5891024','alexrodiguez19@gmail.com','502-546-2234');

// test for the Manager parameters
test('test if we can constructor values for the manager,', () => {
    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe('5891024');
    expect(manager.email).toBe('alexrodiguez19@gmail.com');
    expect(manager.officeNumber).toBe('502-546-2234');
});

test('test if we can getName() method', () => {
    expect(manager.getName()).toBe('Alex');
});

test('test if we can getId() method', () => {
    expect(manager.getId()).toBe('5891024');
});

test('test if we can getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('502-546-2234');
});


test('test if we can getEmail() method', () => {
    expect(manager.getEmail()).toBe('alexrodiguez19@gmail.com');
});

test('test if we can getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});
