/* global fetch */
import search from './search';
import article from './article';
import influencer from './influencer';
import share from './share';
import shared_link from './shared_link';
import trend from './trend';

import {API_UR, API_KEY} from './config';
import toJSON from './utils';

export default class BuzzSumoWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.apiKey = options.apiKey || API_KEY;

    // this.token = options.token;

    this.article = article.bind(this)();
    this.influencer = influencer.bind(this)();
    this.share = share.bind(this)();
    this.shared_link = shared_link.bind(this)();
    this.trend = trend.bind(this)();

    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `'Bearer ${this.token}'`,
      },
    };
    return fetch(url, headers).then(toJSON);
  }
}
