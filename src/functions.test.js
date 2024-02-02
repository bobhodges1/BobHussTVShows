const { createPaddedEpisode } = require("./functions");

test("makeEpisodeIndex", () => {
    expect(createPaddedEpisode(1, 1)).toEqual("S01E01");
});
test("makeEpisodeIndex", () => {
    expect(createPaddedEpisode(3, 19)).toEqual("S03E19");
});
test("makeEpisodeIndex", () => {
    expect(createPaddedEpisode(29, 106)).toEqual("S29E106");
});
