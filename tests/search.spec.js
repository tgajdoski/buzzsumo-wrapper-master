import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import * as _ from 'lodash';
chai.use(sinonChai);
sinonStubPromise(sinon);

import BuzzSumoWrapper from '../src/index';

describe('Search', () => {
    let stubedAxios;
    let promise;
    let buzz = new BuzzSumoWrapper({});

  beforeEach( () => {
    stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
  });

  afterEach( () => {
    stubedAxios.restore();
  });

  describe('smoke tests', () => {
    it('should exist the buzz.search.articles method', () => {
      expect(buzz.search.articles).to.exist;
    });

    it('should exist the buzz.search.influencers method', () => {
      expect(buzz.search.influencers).to.exist;
    });

    it('should exist the buzz.search.shares method', () => {
      expect(buzz.search.shares).to.exist;
    });

    it('should exist the buzz.search.shared_links method', () => {
      expect(buzz.search.shared_links).to.exist;
    });

    it('should exist the buzz.search.trends method', () => {
      expect(buzz.search.trends).to.exist;
    });
  });

 
  // articles
  describe('buzz.search.articles', () => {
    it('should call fetch function', () => {
      const articles = buzz.search.articles({q: 'Qnary'});
      expect(stubedAxios).to.have.been.calledOnce;
    });


    it('should call fetch with the correct URL', () => {
    //   const articles1 = buzz.search.articles({q: 'Qnary'});
    //   expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/articles.json?q=Qnary&api_key=buzzsumo_api_key')

    //   const articles2 = buzz.search.articles({q: 'AI'});
    //   expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/articles.json?q=AI&api_key=buzzsumo_api_key')
    
    let default_options =  {
        result_type: "total",
        page: 0,
        num_days: 1,
        article_type: "giveaway, infographic, general_article, guest_post, interview,video",
        num_results: 20
      }

    let config1 = {
        params: {
            q: 'Qnary',
        }
    };
      const articles1 = buzz.search.articles(_.assign({}, default_options, config1.params));
      expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/articles.json', _.assign({}, default_options, config1.params) );
 
    let config2 = {
        params: {
            q: 'AI',
        }
    };
    const articles2 = buzz.search.articles(_.assign({}, default_options, config2.params));
    expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/articles.json', _.assign({}, default_options, config2.params) );    
    });
  });

  // influencers
  describe('buzz.search.influencers', () => {
    it('should call fetch function', () => {
      const influencers = buzz.search.influencers({q: 'Qnary'});
      expect(stubedAxios).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
        let default_options =  {}

    //   const influencers1 = buzz.search.influencers({q: 'Qnary'});
    //   expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/influencers.json?q=Qnary&api_key=buzzsumo_api_key')

    //   const influencers2 = buzz.search.influencers({q: 'AI'});
    //   expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/influencers.json?q=AI&api_key=buzzsumo_api_key')
    let config1 = {
        params: {
            q: 'Qnary',
        }
    };
      const influencers1 = buzz.search.influencers(_.assign({}, default_options, config1.params));
      expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/influencers.json', _.assign({}, default_options, config1.params) );
 
    let config2 = {
        params: {
            q: 'AI',
        }
    };
    const influencers2 = buzz.search.influencers(_.assign({}, default_options, config2.params));
    expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/influencers.json', _.assign({}, default_options, config2.params) );  
    });
  });

//   // shares
//   describe('buzz.search.shares', () => {
//     it('should call fetch function', () => {
//       const shares = buzz.search.shares({q: 'Qnary'});
//       expect(stubedAxios).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const shares1 = buzz.search.shares({q: 'Qnary'});
//       expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/shares.json?q=Qnary&api_key=buzzsumo_api_key')

//       const shares2 = buzz.search.shares({q: 'AI'});
//       expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/shares.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//   //shared_links
//   describe('buzz.search.shared_links', () => {
//     it('should call fetch function', () => {
//       const shared_links = buzz.search.shared_links({q: 'Qnary'});
//       expect(stubedAxios).to.have.been.calledOnce;
//     });

//     it('should call fetch with the correct URL', () => {
//       const shared_links1 = buzz.search.shared_links({q: 'Qnary'});
//       expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/shared_links.json?q=Qnary&api_key=buzzsumo_api_key')

//       const shared_links2 = buzz.search.shared_links({q: 'AI'});
//       expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/shared_links.json?q=AI&api_key=buzzsumo_api_key')
//     });
//   });

//  //trends
//  describe('buzz.search.trends', () => {
//   it('should call fetch function', () => {
//     const trends = buzz.search.trends({q: 'Qnary'});
//     expect(stubedAxios).to.have.been.calledOnce;
//   });

//   it('should call fetch with the correct URL', () => {
//     const trends1 = buzz.search.trends({q: 'Qnary'});
//     expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/trends.json?q=Qnary&api_key=buzzsumo_api_key')

//     const trends2 = buzz.search.trends({q: 'AI'});
//     expect(stubedAxios).to.have.been.calledWith('http://api.buzzsumo.com/search/trends.json?q=AI&api_key=buzzsumo_api_key')
//   });
// });


});
