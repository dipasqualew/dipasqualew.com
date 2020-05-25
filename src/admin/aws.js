

const AWS = require("aws-sdk");

const POSTS_TABLE = "dipasqualewcom__posts";

const getDb = () => {
    const client = new AWS.DynamoDB.DocumentClient({
        accessKeyId: process.env.SITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.SITE_AWS_SECRET_KEY_ID,
        region: process.env.SITE_AWS_REGION,
    });

    return client;
};



const writePost = async (post) => {
    const client = getDb();

    const params = {
        TableName: POSTS_TABLE,
        Item: post,
    };

    try {
        const response = await new Promise((resolve, reject) => {
            client.put(params, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });

        return response;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const readPost = async (id) => {
    const client = getDb();

    const params = {
        TableName: POSTS_TABLE,
        Key: {
            id,
        },
    };

    try {
        const response = await new Promise((resolve, reject) => {
            client.get(params, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });

        return response.Item;
    } catch (err) {
        console.log(err);

        return null;
    }
};

const readPosts = async () => {
    const client = getDb();

    const params = {
        TableName : POSTS_TABLE,
    };

    try {
        const response = await new Promise((resolve, reject) => {
            client.scan(params, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });

        return response.Items;
    } catch (err) {
        console.log(err);

        return null;
    }
};


module.exports = {
    getDb,
    writePost,
    readPost,
    readPosts,
};
