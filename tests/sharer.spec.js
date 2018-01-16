import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';
import article from '../src/article';

describe('Sharer', () => {
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
    it('should have getSharers method', () => {
      expect(buzz.sharer.getSharers).to.exist;
    });
  });

  describe('getShares', () => {
    it('should call fetch method', () => {
      const sharers = buzz.sharer.getSharers({});
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const sharer1 = buzz.sharer.getSharers({article_id:'Qnary'});
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/shares.json?article_id=Qnary&api_key=buzzsumo_api_key');

      const sharer2 = buzz.sharer.getSharers({article_id: 'someId'})
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/shares.json?article_id=someId&api_key=buzzsumo_api_key');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ sharer: 'qnary'});
      const sharer = buzz.sharer.getSharers({article_id: 'Qnary'});
      expect(sharer.resolveValue).to.be.eql({ sharer: 'qnary'});
    });
  });

 
});
