import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);
import BuzzSumoWrapper from '../src/index';

describe('Trend', () => {
    let buzz;
    let stubedAxios;
    let promise;

    beforeEach(() => {
        buzz = new BuzzSumoWrapper({});
        stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
        promise = stubedAxios.returnsPromise();
        promise.resolves({ trend: 'qnary' });
    });

    afterEach(() => {
        stubedAxios.restore();
    });

    describe('smoke tests', () => {
        it('should have getTrend method', () => {
            expect(buzz.trend.getTrend).to.exist;
        });
    });

    describe('getTrend', () => {
        it('should call fetch method', () => {
            const trend = buzz.trend.getTrend({});
            expect(stubedAxios).to.have.been.calledOnce;
        });

        it('should call fetch with the correct URL', () => {

            let config1 = {
                params: {}
            };

            const trend1 = buzz.trend.getTrend(config1.params);
            expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/trends.json', config1.params);

            let config2 = {
                params: {}
            };
            const trend2 = buzz.trend.getTrend(config2.params)
            expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/trends.json', config2.params);
        });

        it('should return the correct data from Promise', () => {
            const trend = buzz.trend.getTrend({});
            expect(trend.resolveValue).to.be.eql({ trend: 'qnary' });
        });
    });


});
