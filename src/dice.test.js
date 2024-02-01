const { randomDieRoll } = require("./dice");

test("randomDieRoll", () => {
    for (let i = 0; i < 1000; i++) {
        expect([1, 2, 3, 4, 5, 6]).toContain(randomDieRoll());
    }
});
