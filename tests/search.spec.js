// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import sinonStubPromise from 'sinon-stub-promise';
// chai.use(sinonChai);
// sinonStubPromise(sinon);

// global.fetch = require('node-fetch');

// import BuzzSumoWrapper from '../src/index';

// describe('Search', () => {
//   let buzz;
//   let fetchedStub;
//   let promise;

//   beforeEach( () => {
//     buzz = new BuzzSumoWrapper({
//       token: 'foo'
//     });

//     fetchedStub = sinon.stub(global, 'fetch');
//     promise = fetchedStub.returnsPromise();
//   });

//   afterEach( () => {
//     fetchedStub.restore();
//   });

//   // describe('smoke tests', () => {
//   //   it('should exist the buzz.search.articles method', () => {
//   //     expect(buzz.search.articles).to.exist;
//   //   });

//   //   it('should exist the buzz.search.influencers method', () => {
//   //     expect(buzz.search.influencers).to.exist;
//   //   });

//   //   it('should exist the buzz.search.shares method', () => {
//   //     expect(buzz.search.shares).to.exist;
//   //   });

//   //   it('should exist the buzz.search.shared_links method', () => {
//   //     expect(buzz.search.shared_links).to.exist;
//   //   });

//   //   it('should exist the buzz.search.trends method', () => {
//   //     expect(buzz.search.trends).to.exist;
//   //   });
//   // });

 
//   // articles
//   describe('buzz.search.articles', () => {
//     it('should call fetch function', () => {
//       const articles = buzz.search.articles({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const articles1 = buzz.search.articles({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/articles.json?q=Qnary&api_key=buzzsumo_api_key')

//       const articles2 = buzz.search.articles({q: 'AI'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/articles.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//   // influencers
//   describe('buzz.search.influencers', () => {
//     it('should call fetch function', () => {
//       const influencers = buzz.search.influencers({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const influencers1 = buzz.search.influencers({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/influencers.json?q=Qnary&api_key=buzzsumo_api_key')

//       const influencers2 = buzz.search.influencers({q: 'AI'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/influencers.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//   // shares
//   describe('buzz.search.shares', () => {
//     it('should call fetch function', () => {
//       const shares = buzz.search.shares({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const shares1 = buzz.search.shares({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/shares.json?q=Qnary&api_key=buzzsumo_api_key')

//       const shares2 = buzz.search.shares({q: 'AI'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/shares.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//   //shared_links
//   describe('buzz.search.shared_links', () => {
//     it('should call fetch function', () => {
//       const shared_links = buzz.search.shared_links({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const shared_links1 = buzz.search.shared_links({q: 'Qnary'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/shared_links.json?q=Qnary&api_key=buzzsumo_api_key')

//       const shared_links2 = buzz.search.shared_links({q: 'AI'});
//       expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/shared_links.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//  //trends
//  describe('buzz.search.trends', () => {
//   it('should call fetch function', () => {
//     const trends = buzz.search.trends({q: 'Qnary'});
//     expect(fetchedStub).to.have.been.calledOnce;
//   });

//   it('should call fetch with the correct URL', () => {
//     const trends1 = buzz.search.trends({q: 'Qnary'});
//     expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/trends.json?q=Qnary&api_key=buzzsumo_api_key')

//     const trends2 = buzz.search.trends({q: 'AI'});
//     expect(fetchedStub).to.have.been.calledWith('http://api.buzzsumo.com/search/trends.json?q=AI&api_key=buzzsumo_api_key')
//   });
// });


// });
