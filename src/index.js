import * as axios from 'axios';
import search from './search';
import article from './article';
import influencer from './influencer';
import share from './share';
import sharedLink from './shared_link';
import trend from './trend';
import { API_URL, API_KEY } from './config';
import toJSON from './utils';

export default class BuzzSumoWrapper {
  constructor(options) {
    this.apiURL = options.apiURL ? options.apiURL : API_URL;
    this.apiKey = options.apiKey ? options.apiKey : API_KEY;
    this.token = options.token;
    this.article = article.bind(this)();
    this.influencer = influencer.bind(this)();
    this.sharer = share.bind(this)();
    this.shared_link = sharedLink.bind(this)();
    this.trend = trend.bind(this)();

    this.search = search.bind(this)();
  }

  request(url, params) {
    console.log("CALLED with ", params)

    return axios.get(url, params)
    .then((response) => {
      response
    })
    .catch((error) => {
      Promise.reject(error);
    });
  }
}
