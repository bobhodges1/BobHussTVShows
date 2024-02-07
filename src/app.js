const { app } = require("./support/setupExpress");
const { query } = require("./support/db");
const { gameOfThronesEpisodes } = require("./data/gameOfThronesData");
const {
    createPaddedEpisode,
    findEpisodeId,
    filterShowArray,
} = require("./functions");

//This static page will be changed to dynamic
app.get("/", (req, res) => {
    res.render("pages/index", {
        gameOfThronesEpisodes,

        createPaddedEpisode,
    });
});

app.get("/tvShow", (req, res) => {
    res.render("pages/tvShow", {
        gameOfThronesEpisodes,
        createPaddedEpisode,
    });
});

app.get("/search", (req, res) => {
    const searchedWord = req.query.searchedWord;
    const filteredShow = filterShowArray(gameOfThronesEpisodes, searchedWord);
    res.render("pages/tvShow", {
        gameOfThronesEpisodes: filteredShow,
        createPaddedEpisode,
    });
});

app.get("/episode/:id", (req, res) => {
    const episodeId = req.params.id;
    const episodeData = findEpisodeId(episodeId);
    res.render("pages/episode", {
        gameOfThronesEpisodes,
        createPaddedEpisode,
        episodeId,
        episodeSeason: episodeData.season,
        episodeNumber: episodeData.number,
        episodeSummary: episodeData.summary,
        episodeTitle: episodeData.name,
        episodeRuntime: episodeData.runtime,
        episodeAirdate: episodeData.airdate,
        episodeAvgRating: episodeData.rating.average,
        episodeImage: episodeData.image.original,
    });
});

app.get("/db-test", async (req, res) => {
    try {
        const dbResult = await query("select now()");
        const rows = dbResult.rows;
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send(
            "Sorry, an error occurred on the server.  Ask the dev team to check the server logs at time " +
                new Date(),
        );
    }
});

// use the environment variable PORT, or 3000 as a fallback if it is undefined
const PORT_NUMBER = process.env.PORT ?? 3000;

//start the server listening indefinitely
app.listen(PORT_NUMBER, () => {
    console.log(
        `Your express app started listening on ${PORT_NUMBER} at ${new Date()}`,
    );
});