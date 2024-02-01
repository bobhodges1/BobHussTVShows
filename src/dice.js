/**
 * Returns a random d6 die roll from 1-6.
 * @returns {number} a number between 1 and 6 inclusive, representing a d6 die roll.
 */
function randomDieRoll() {
    const n = 1 + Math.floor(Math.random() * 6);
    return n;
}

exports.randomDieRoll = randomDieRoll;
