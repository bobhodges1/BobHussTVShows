function createPaddedEpisode(season, episode) {
    const seasonPaddedNumber = season < 10 ? `0${season}` : `${season}`;
    const episodePaddedNumber = episode < 10 ? `0${episode}` : `${episode}`;
    return "S" + seasonPaddedNumber + "E" + episodePaddedNumber;
}

module.exports = { createPaddedEpisode };
