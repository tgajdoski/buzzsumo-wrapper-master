import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';


sinonStubPromise(sinon);
chai.use(sinonChai);

 global.axios = require('axios');
//global.fetch = require('node-fetch');

import BuzzSumoWrapper from '../src/index';

describe('BuzzSumoWrapper Library', function () {
  it('should create an instance of BuzzSumoWrapper', () => {
    let buzz = new BuzzSumoWrapper({});
    expect(buzz).to.be.an.instanceof(BuzzSumoWrapper);
  });

  it('should receive apiURL as an option', () => {
    let buzz = new BuzzSumoWrapper({
      apiURL: 'blabla'
    });

    expect(buzz.apiURL).to.be.equal('blabla');
  });

  it('should use the default apiURL if not provided', () => {
    let buzz = new BuzzSumoWrapper({});
    expect(buzz.apiURL).to.be.equal('http://api.buzzsumo.com/search/');
  });


  describe('request method', () => {
    let stubedAxios;
    let promise;
    let buzz = new BuzzSumoWrapper({});

    beforeEach( () => {
      stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
    });

    afterEach( () => {
      stubedAxios.restore();
    });

    it('should have request method', () => {
      expect(buzz.request).to.exist;
    });

    it('should call axios when request', () => {
      let config = {
        params: {
          ID: 12345,
        }
      };
      return buzz.request('/url', config).then((res) => {
        expect(stubedAxios.callCount).to.equal(1);
      });
    });

    it('should call axios when request', () => {
      let config = {
        params: {
          g: 'Marketing',
        }
      };
      return buzz.request('/url', config).then((res) => {
        expect(stubedAxios).to.have.been.deep.calledWith('/url', config);
      });
    });
  });
});
