/*eslint no-console:0, new-cap:0, strict:0 */
'use strict';

const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
//const favicon = require('serve-favicon');
const logger = console;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./webpack.config.js');
let webpack, webpackMiddleware, webpackCompiler;
const isProdEnv = (process.env.NODE_ENV === 'production');

const app = express();
app.use(cors());
app.set('port', config.port || 3000);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (!isProdEnv){
    webpack = require('webpack');
    webpackMiddleware = require('webpack-dev-middleware');
    webpackCompiler = webpack(config);

    app.use(webpackMiddleware(webpackCompiler, {
        publicPath: config.output.publicPath,
        hot: true,
        stats: {
            colors: true,
            errorDetails: true
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        }
    }));
    app.use(require('webpack-hot-middleware')(webpackCompiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}

// serve root index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(app.get('port'), '0.0.0.0', function(err){
    if (err) {
        logger.error(err);
        throw err;
    }
    const addrInfo = server.address();
    logger.info('Listening on', addrInfo.address, addrInfo.port);
});


