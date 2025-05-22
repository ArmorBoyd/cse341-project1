const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Users Api",
        descritption: "Users Api"
    },
    host: "localhost:3000",
    schemes: ["https", "http"]
};

const outputFile = './swagger.json';

const endpointFiles = ['./routes/index.js'];

//This will generate a swagger.json file in the root directory
swaggerAutogen(outputFile, endpointsFiles, doc);

