// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import sinonStubPromise from 'sinon-stub-promise';
// sinonStubPromise(sinon);
// chai.use(sinonChai);

// global.fetch = require('node-fetch');

// import BuzzSumoWrapper from '../src/index';
// import article from '../src/article';

// describe('Trend', () => {
//   let buzz;
//   let stubedFetch;
//   let promise;

//   beforeEach( () => {
//     buzz = new BuzzSumoWrapper({});
//     stubedFetch = sinon.stub(global, 'fetch');
//     promise = stubedFetch.returnsPromise();
//   });

//   afterEach( () => {
//     stubedFetch.restore();
//   });

//   describe('smoke tests', () => {
//     it('should have getTrend method', () => {
//       expect(buzz.trend.getTrend).to.exist;
//     });
//   });

//   describe('getTrend', () => {
//     it('should call fetch method', () => {
//       const trend = buzz.trend.getTrend({});
//       expect(stubedFetch).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const trend1 = buzz.trend.getTrend({});
//       expect(stubedFetch).to.have.been
//         .calledWith('http://api.buzzsumo.com/search/trends.json?&api_key=buzzsumo_api_key');

//       const trend2 = buzz.trend.getTrend({})
//       expect(stubedFetch).to.have.been
//         .calledWith('http://api.buzzsumo.com/search/trends.json?&api_key=buzzsumo_api_key');
//     });

//     it('should return the correct data from Promise', () => {
//       promise.resolves({ trend: 'qnary'});
//       const trend = buzz.trend.getTrend({});
//       expect(trend.resolveValue).to.be.eql({ trend: 'qnary'});
//     });
//   });

 
// });
