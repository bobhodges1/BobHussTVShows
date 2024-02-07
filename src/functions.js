const { gameOfThronesEpisodes } = require("./data/gameOfThronesData");

function createPaddedEpisode(season, episode) {
    const seasonPaddedNumber = season < 10 ? `0${season}` : `${season}`;
    const episodePaddedNumber = episode < 10 ? `0${episode}` : `${episode}`;
    return "S" + seasonPaddedNumber + "E" + episodePaddedNumber;
}

function findEpisodeId(episodeId) {
    const episodeData = gameOfThronesEpisodes.find(
        (episode) => episode.id == episodeId,
    );
    return episodeData;
}

function filterShowArray(tvShow, searchedWord) {
    let filteredArray = [];
    for (let episode of tvShow) {
        if (
            episode.name.includes(searchedWord) ||
            episode.summary.includes(searchedWord)
        ) {
            filteredArray.push(episode);
        } else filteredArray = tvShow;
    }
    return filteredArray;
}

module.exports = { createPaddedEpisode, findEpisodeId, filterShowArray };
