/**
 *Load Module Dependencies
 */
const express            = require('express');
const cors               = require('cors');
const { graphqlExpress } = require('apollo-server-express');
const expressPlayground  = require('graphql-playground-middleware-express').default;
const bodyParser         = require('body-parser');
const mongoose           = require("mongoose");

const config             = require('./config');
const { schema }         = require('./graphql');

// Connect To Mongodb
mongoose.connect(config.DB_URL);

mongoose.connection.on("connected", () =>{
    console.log("connected to mongodb successfully")
});

mongoose.connection.on("", (err)=>{
    console.log(err.message);
    process.exit(1);
});


/**
 * express application
 */
const app = express();

// allow cross origin requests
// configure to allow only requests from certain origins
app.use(cors());

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, cacheControl: true }));

app.get('/explore', expressPlayground({ endpoint: '/graphql' }));

app.listen(config.HTTP_PORT, () => {
    console.log(`Running a GraphQL API server at localhost:${config.HTTP_PORT}/graphql`);
});
