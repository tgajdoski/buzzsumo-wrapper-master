import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';
import article from '../src/article';

describe('Shared_Link', () => {
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
      expect(buzz.shared_link.getSharedLinks).to.exist;
    });
  });

  describe('getSharedLinks', () => {
    it('should call fetch method', () => {
      const sharers = buzz.shared_link.getSharedLinks({});
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const shared_link1 = buzz.shared_link.getSharedLinks({username :'Qnary'});
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/shared_links.json?username=Qnary&api_key=buzzsumo_api_key');

      const shared_link2 = buzz.shared_link.getSharedLinks({username : 'somebody'})
      expect(stubedFetch).to.have.been
        .calledWith('http://api.buzzsumo.com/search/shared_links.json?username=somebody&api_key=buzzsumo_api_key');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ shared_link: 'qnary'});
      const shared_link = buzz.shared_link.getSharedLinks({username: 'Qnary'});
      expect(shared_link.resolveValue).to.be.eql({ shared_link: 'qnary'});
    });
  });

 
});
