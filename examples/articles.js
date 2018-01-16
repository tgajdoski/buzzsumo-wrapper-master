/* to run: babel-node articles.js */

global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';

const buzz = new BuzzSumoWrapper({});

const articles = buzz.articles.getMostShared('marketing');

articles.then(console.log(data.total_pages));
