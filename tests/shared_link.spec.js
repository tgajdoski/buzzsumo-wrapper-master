import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);
chai.use(sinonChai);
import BuzzSumoWrapper from '../src/index';


describe('Shared_Link', () => {
    let buzz;
    let stubedAxios;
    let promise;

    beforeEach(() => {
        buzz = new BuzzSumoWrapper({});
        stubedAxios = sinon.stub(buzz.axios, 'get').returns(new Promise((r) => r({})));
        promise = stubedAxios.returnsPromise();
        promise.resolves({ shared_link: 'qnary' });
    });

    afterEach(() => {
        stubedAxios.restore();
    });

    describe('smoke tests', () => {
        it('should have getSharers method', () => {
            expect(buzz.shared_link.getSharedLinks).to.exist;
        });
    });

    describe('getSharedLinks', () => {
        it('should call axios method', () => {
            const sharers = buzz.shared_link.getSharedLinks({});
            expect(stubedAxios).to.have.been.calledOnce;
        });

        it('should call axios with the correct URL', () => {
            let config1 = {
                params: {
                    username: 'Qnary',
                }
            };

            const shared_link1 = buzz.shared_link.getSharedLinks(config1.params);
            expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/shared_links.json', config1.params);

            let config2 = {
                params: {
                    username: 'somebody',
                }
            };
            const shared_link2 = buzz.shared_link.getSharedLinks(config2.params)
            expect(stubedAxios).to.have.been.deep.calledWith('http://api.buzzsumo.com/search/shared_links.json', config2.params);
        });

        it('should return the correct data from Promise', () => {
            const shared_link = buzz.shared_link.getSharedLinks({ username: 'Qnary' });
            expect(shared_link.resolveValue).to.be.eql({ shared_link: 'qnary' });
        });
    });


});
