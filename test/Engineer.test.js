const Engineer = require("../lib/Engineer");

test("Test for Engineer Class", () => {
    const newEngineer = new Engineer('Ahmad', 147, 'ahmad.hanif@mckesson.com', 'AhmadMHanif7')

    expect(newEngineer.name).toBe('Ahmad');
    expect(newEngineer.id).toBe(147);
    expect(newEngineer.email).toBe('ahmad.hanif@mckesson.com');
    expect(newEngineer.gitHub).toBe('AhmadMHanif7')

})