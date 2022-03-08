// Export and require modules for test
const Employee = require('../lib/Employee');
const employee = new Employee('Alex', '5891024','alexrodiguez19@gmail.com');

// test for Employee Parameter
test('test if we can constructor values for the employee,', () => {
    expect(employee.name).toBe('Alex');
    expect(employee.id).toBe('5891024');
    expect(employee.email).toBe('alexrodiguez19@gmail.com');
});

test('test if we can getName() method', () => {
    expect(employee.getName()).toBe('Alex');
});

test('test if we can getId() method', () => {
    expect(employee.getId()).toBe('5891024');
});

test('test if we can getEmail() method', () => {
    expect(employee.getEmail()).toBe('alexrodiguez19@gmail.com');
});

test('test if we can getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});




