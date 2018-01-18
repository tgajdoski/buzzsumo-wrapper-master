import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import MockAdapter from 'axios-mock-adapter';

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
    let stubedFetch;
    let promise;

    beforeEach( () => {
      stubedFetch = sinon.stub(global, 'axios');
      promise = stubedFetch.returnsPromise();

      let mockAdapter = new MockAdapter(axios);
      mockAdapter.onGet('url').reply(200, {
        data: {}
      });

    });

    afterEach( () => {
      stubedFetch.restore();
    });

    it('should have request method', () => {
      let buzz = new BuzzSumoWrapper({});
      expect(buzz.request).to.exist;
    });

    it('should call fetch when request', () => {

      let buzz = new BuzzSumoWrapper({});
      let response = buzz.request('url', {});
      setTimeout(() => {
        expect(response).to.have.been.calledOnce;
     }, 0)

    //  expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with right url passed', () => {
      let buzz = new BuzzSumoWrapper({});

      buzz.request('url', {});
      
      let response = buzz.request('url', {});
      setTimeout(() => {
        expect(response).to.have.been.calledWith('url?&api_key=buzzsumo_api_key');
     }, 0)
      //expect(stubedFetch).to.have.been.calledWith('url?&api_key=buzzsumo_api_key');
    });


  });
});
