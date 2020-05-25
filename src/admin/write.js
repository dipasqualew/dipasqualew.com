

const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY_ID,
    region: process.env.AWS_REGION,
});

const writePost = (post) => {
    const client = new AWS.DynamoDB.DocumentClient();
    const table = "dipasqualewcom__posts";

    const params = {
        TableName: table,
        Item: post,
    };

    try {
        await new Promise((resolve, reject) => {
            client.put(params, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(data);
            });
        });
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    writePost,
}
