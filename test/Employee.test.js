const Employee = require("../lib/Employee");

test("Test for Employee Class", () => {
    const newEmployee = new Employee('Ahmad', 147, 'ahmad.hanif@mckesson.com')

    expect(newEmployee.name).toBe('Ahmad');
    expect(newEmployee.id).toBe(147);
    expect(newEmployee.email).toBe('ahmad.hanif@mckesson.com');
})