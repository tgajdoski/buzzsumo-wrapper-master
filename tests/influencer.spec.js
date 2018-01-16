import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';
import article from '../src/article';

describe('Influencer', () => {
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
    it('should have getInfluencers method', () => {
      expect(buzz.influencer.getInfluencers).to.exist;
    });
  });

  describe('getInfluencers', () => {
    it('should call fetch method', () => {
      const influencers = buzz.influencer.getInfluencers({});
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const influencer1 = buzz.influencer.getInfluencers({q:'Qnary'});
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/influencers.json?q=Qnary&api_key=buzzsumo_api_key');

      const influencer2 = buzz.influencer.getInfluencers({q: 'somebody'})
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/influencers.json?q=somebody&api_key=buzzsumo_api_key');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ influencer: 'qnary'});
      const influencer = buzz.influencer.getInfluencers({q: 'Qnary'});
      expect(influencer.resolveValue).to.be.eql({ influencer: 'qnary'});
    });
  });

 
});
