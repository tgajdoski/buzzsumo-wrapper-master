/* global fetch */
import search from './search';
import article from './article';
import influencer from './influencer';
import share from './share';
import shared_link from './shared_link';
import trend from './trend';

import {API_URL, API_KEY} from './config';
import toJSON from './utils';

export default class BuzzSumoWrapper {
  constructor(options) {

    this.apiURL = options.apiURL ? options.apiURL : API_URL;
    this.apiKey = options.apiKey ? options.apiKey : API_KEY;
    this.token = options.token;
   
    this.article = article.bind(this)();
    this.influencer = influencer.bind(this)();
    this.share = share.bind(this)();
    this.shared_link = shared_link.bind(this)();
    this.trend = trend.bind(this)();

    this.search = search.bind(this)();
  }
  
  request(url, params) {
  
    var url = `${url}`;
    var esc = encodeURIComponent;

    // console.log('params ' , params);

    var query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
    
    // console.log('query ', query);
    
    var url_apiKey = `${url}?${query}&api_key=${this.apiKey}`;

    console.log('url_apiKey ', url_apiKey);
    return fetch(url_apiKey).then(toJSON);

    // var request = new Request(`${url}&api_key=${this.apiKey}`, {
    //   method: 'GET', 
    //   // mode: 'cors', 
    //   // headers: new Headers({
    //   //   'Content-Type': 'application/json'
    //   // })
    // });

   // return fetch(request).then(toJSON);
   //  return fetch(url, headers).then(toJSON);
  }
}
