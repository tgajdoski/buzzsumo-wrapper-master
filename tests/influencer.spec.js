import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);
import * as _ from 'lodash';
import BuzzSumoWrapper from '../src/index';

describe('Influencer', () => {
  let buzz;
  let stubedAxios;
  let promise;

  beforeEach( () => {
    buzz = new BuzzSumoWrapper({});
    stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
    promise = stubedAxios.returnsPromise();
    promise.resolves({ influencer: 'qnary'});
  });

  afterEach( () => {
    stubedAxios.restore();
  });

  describe('smoke tests', () => {
    it('should have getInfluencers method', () => {
      expect(buzz.influencer.getInfluencers).to.exist;
    });
  });

  describe('getInfluencers', () => {
    it('should call axios method', () => {
      const influencers = buzz.influencer.getInfluencers({});
      expect(stubedAxios).to.have.been.calledOnce;
    });

    it('should call axios with the correct URL', () => {
     
        let config1 = {
            params: {
                q: 'Qnary',
            }
        };
          
        const influencer1 = buzz.influencer.getInfluencers(config1.params);
          expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/influencers.json',  config1.params );
     
        let config2 = {
            params: {
                q: 'AI',
            }
        };
        const influencer2 = buzz.influencer.getInfluencers(config2.params)
          expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/influencers.json',  config2.params );
    });
     
    });

    it('should return the correct data from Promise', () => {
      const influencer = buzz.influencer.getInfluencers({q: 'Qnary'});
      expect(influencer.resolveValue).to.be.eql({ influencer: 'qnary'});
    });
 
});
