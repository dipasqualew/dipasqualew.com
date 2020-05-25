// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const { readPosts } = require("./src/admin/aws");

const loadFixture = (addCollection, fixture) => {
    const items = require(`./fixtures/${fixture}.json`);
    const collection = addCollection(fixture);

    items.forEach((item) => {
        collection.addNode(item);
    });
};

const loadDatabase = async (addCollection) => {
    console.log("Loading Posts from AWS DynamoDB.");
    const items = await readPosts();
    const collection = addCollection("Post");

    items.forEach((item) => {
        collection.addNode(item);
    });
}

module.exports = (api) => {

    api.loadSource(async ({ addCollection }) => {
        // loadFixture(addCollection, "Post");
        await loadDatabase(addCollection);
    });

    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}
