import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);
import BuzzSumoWrapper from '../src/index';

describe('Sharer', () => {
  let buzz;
  let stubedAxios;
  let promise;

  beforeEach( () => {
    buzz = new BuzzSumoWrapper({});
    stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
    promise = stubedAxios.returnsPromise();
    promise.resolves({ sharer: 'qnary' });
  });

  afterEach( () => {
    stubedAxios.restore();
  });

  describe('smoke tests', () => {
    it('should have getSharers method', () => {
      expect(buzz.sharer.getSharers).to.exist;
    });
  });

  describe('getShares', () => {
    it('should call axios method', () => {
      const sharers = buzz.sharer.getSharers({});
      expect(stubedAxios).to.have.been.calledOnce;
    });

    it('should call axios with the correct URL', () => {
        let config1 = {
            params: {
                article_id: 'Qnary',
            }
        };

        const sharer1 = buzz.sharer.getSharers(config1.params);
        expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/shares.json', config1.params);

        let config2 = {
            params: {
                article_id: 'someID',
            }
        };
        const sharer2 = buzz.sharer.getSharers(config2.params)
        expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/shares.json', config2.params);
    });

    it('should return the correct data from Promise', () => {
      const sharer = buzz.sharer.getSharers({article_id: 'Qnary'});
      expect(sharer.resolveValue).to.be.eql({ sharer: 'qnary'});
    });
  });

 
});
