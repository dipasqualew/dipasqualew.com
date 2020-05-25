'use strict';


const handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Website deployed to Netlify on https://dipasqualew.com",
        }),
    };

    return response;
}

module.exports.handler = handler;
