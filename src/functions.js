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
    debugger;
    const queryWord = searchedWord.toLowerCase();
    return tvShow.filter((episode) => {
        const name = episode.name.toLowerCase();
        const summary = episode.summary.toLowerCase();
        return name.includes(queryWord) || summary.includes(queryWord);
    }); 
}


console.log(filterShowArray(gameOfThronesEpisodes, "winter"));
module.exports = { createPaddedEpisode, findEpisodeId, filterShowArray };
