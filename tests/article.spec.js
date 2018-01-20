import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);
import * as _ from 'lodash';
import BuzzSumoWrapper from '../src/index';
//import article from '../src/article';

describe('Article', () => {
  let buzz;
  let stubedAxios;
  let promise;

  let default_options = {
    result_type: "total",
    page: 0,
    num_days: 1,
    article_type: "giveaway,infographic,general_article,guest_post,interview,video",
    num_results: 20
  }

  beforeEach(() => {
    buzz = new BuzzSumoWrapper({});
    stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
    promise = stubedAxios.returnsPromise();
    promise.resolves({ article: 'qnary' });
  });

  afterEach(() => {
    stubedAxios.restore();
  });

  describe('smoke tests', () => {
    it('should have getMostShared method', () => {
      expect(buzz.article.getMostShared).to.exist;
    });
  });

  describe('getMostShared', () => {

    it('should call axios method', () => {
      const articles = buzz.article.getMostShared({});
      expect(stubedAxios).to.have.been.calledOnce;
    });

    it('should call axios with the correct URL', () => {
      let config1 = {
        params: {
          q: 'Qnary',
        }
      };
      const articles1 = buzz.article.getMostShared(config1.params);
      expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/articles.json', _.assign({}, default_options, config1.params));
      let config2 = {
        params: {
          q: 'AI',
        }
      };
      const articles2 = buzz.article.getMostShared(config2.params)
      expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/articles.json', _.assign({}, default_options, config2.params));
    });

    it('should return the correct data from Promise', () => {
      const article = buzz.article.getMostShared({ q: 'Qnary' });
      expect(article.resolveValue).to.be.eql({ article: 'qnary' });
    });
  });


});