//For those using JSDoc, this type definition for an episode object may be helpful.
//However, eventually you will have to improve it when you consider episodes from different shows.
//You can import it into other files using the following syntax with a JSDOc comment
// @typedef {import('./data/gameOfThronesData').Episode} Episode

/**
 * @typedef {object} Episode an object containing information about a single episode
 * @property {number} id - Unique identifier for the episode.
 * @property {string} url - URL of the episode.
 * @property {string} name - Name of the episode.
 * @property {number} season - Season number of the episode.
 * @property {number} number - Episode number in the season.
 * @property {string} type - Type of the episode.
 * @property {string} airdate - Air date of the episode.
 * @property {string} airtime - Air time of the episode.
 * @property {string} airstamp - Timestamp of when the episode aired.
 * @property {{average: number}} rating - Average rating of the episode.
 * @property {number} runtime - Runtime of the episode in minutes.
 * @property {{medium: string, original: string}} image - URLs for medium and original size images of the episode.
 * @property {string} summary - Summary of the episode.
 * @property {{self: {href: string}, show: {href:string}}} _links - Links related to the episode
 */

module.exports = {
    dummyExport: null, //don't really need to export anything except to make this a module to import the types for vscode.
};
