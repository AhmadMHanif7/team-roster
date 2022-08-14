const Manager = require("../lib/Manager");

test("Test for Engineer Class", () => {
    const newIntern = new Manager('Ahmad', 147, 'ahmad.hanif@mckesson.com', 9728769047)

    expect(newIntern.name).toBe('Ahmad');
    expect(newIntern.id).toBe(147);
    expect(newIntern.email).toBe('ahmad.hanif@mckesson.com');
    expect(newIntern.phoneNum).toBe(9728769047);

})