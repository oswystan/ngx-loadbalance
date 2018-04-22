/*
 *********************************************************************************
 *                     Copyright (C) 2018 wystan
 *
 *       filename: app.js
 *    description:
 *        created: 2018-04-22 11:17:04
 *         author: wystan
 *
 *********************************************************************************
 */

const express = require('express');
const app = express();

const logd=console.log;
const logi=console.info;
const loge=console.error;
const logw=console.warn;

function main() {
    if (process.argv.length != 3) {
        loge("usage: app <port>");
        return;
    }
    let port = process.argv[2];

    app.get('/api/', (req, res)=>{
        logi("get request from", port);
        res.send('hello on ' + port + '\n');
    });

    app.listen(port);
}

/************************************* END **************************************/
main();
