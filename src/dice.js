// exports.createEpisodeIndex = createEpisodeIndex;

const { gameOfThronesEpisodes } = require("./data/gameOfThronesData.js");

// Create a pure function to generate the episode code without padStart
function generateEpisodeCode(seasonNumber, episodeNumber) {
    // Function to manually add zero-padding
    const zeroPad = (number) => (number < 10 ? `0${number}` : `${number}`);

    const paddedSeason = zeroPad(seasonNumber);
    const paddedEpisode = zeroPad(episodeNumber);

    return `S${paddedSeason}E${paddedEpisode}`;
}

// Example usage of the function with string inputs
const episodeCode = generateEpisodeCode("2", "7");
console.log(episodeCode); // Outputs: S02E07
