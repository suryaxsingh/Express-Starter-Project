const express = require('express');

const ServerConfig = require('./config/serverconfig');
const connectDB = require('./config/dbConfig');

const app = express();

app.listen(ServerConfig.PORT, async () => {
    await connectDB();
    console.log(`Server started at port ${ServerConfig.PORT}...!!`);
});
