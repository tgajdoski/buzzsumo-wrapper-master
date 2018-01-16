import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';
import article from '../src/article';

describe('Article', () => {
  let buzz;
  let stubedFetch;
  let promise;

  beforeEach( () => {
    buzz = new BuzzSumoWrapper({});
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach( () => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should have getMostShared method', () => {
      expect(buzz.article.getMostShared).to.exist;
    });
  });

  describe('getMostShared', () => {
    it('should call fetch method', () => {
      const articles = buzz.article.getMostShared({});
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const articles1 = buzz.article.getMostShared({q:'Qnary'});
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/articles.json?result_type=total&page=0&num_days=1&article_type=giveaway%2Cinfographic%2Cgeneral_article%2Cguest_post%2Cinterview%2Cvideo&num_results=20&q=Qnary&api_key=buzzsumo_api_key');

      const articles2 = buzz.article.getMostShared({q: 'AI'})
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/articles.json?result_type=total&page=0&num_days=1&article_type=giveaway%2Cinfographic%2Cgeneral_article%2Cguest_post%2Cinterview%2Cvideo&num_results=20&q=AI&api_key=buzzsumo_api_key');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ article: 'qnary'});
      const article = buzz.article.getMostShared({q: 'Qnary'});
      expect(article.resolveValue).to.be.eql({ article: 'qnary'});
    });
  });

 
});
