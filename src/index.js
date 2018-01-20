import * as axios from 'axios';
import search from './search';
import article from './article';
import influencer from './influencer';
import share from './share';
import sharedLink from './shared_link';
import trend from './trend';
import toJSON from './utils';
require('dotenv').config();


export default class BuzzSumoWrapper {
  constructor(options) {
    this.apiURL = options.apiURL ? options.apiURL : process.env.API_URL;
    this.apiKey = options.apiKey ? options.apiKey : process.env.API_KEY;
    this.token = options.token;
    this.article = article.bind(this)();
    this.influencer = influencer.bind(this)();
    this.sharer = share.bind(this)();
    this.shared_link = sharedLink.bind(this)();
    this.trend = trend.bind(this)();
    this.search = search.bind(this)();

    this.axios = axios.create({
      baseURL: this.apiURL,
    });
  }


  
  request(url, config) {
    if (config.params)
       config.params["api_key"] = this.apiKey;
    console.log('config', config);

    return this.axios.get(url, config)
    .then((response) => {

      console.log("response", response);
      return response.data;
    })
    .catch((error) => {
      Promise.reject(error);
    });
  }
}
