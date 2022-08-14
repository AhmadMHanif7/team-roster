const Intern = require("../lib/Intern");

test("Test for Engineer Class", () => {
    const newIntern = new Intern('Ahmad', 147, 'ahmad.hanif@mckesson.com', 'AhmadMHanif7', 'UT Dallas')

    expect(newIntern.name).toBe('Ahmad');
    expect(newIntern.id).toBe(147);
    expect(newIntern.email).toBe('ahmad.hanif@mckesson.com');
    expect(newIntern.gitHub).toBe('AhmadMHanif7');
    expect(newIntern.school).toBe('UT Dallas');

})