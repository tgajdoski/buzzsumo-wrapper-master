// import chai, { expect } from 'chai';
// import sinon from 'sinon';
// import sinonChai from 'sinon-chai';
// import sinonStubPromise from 'sinon-stub-promise';
// sinonStubPromise(sinon);
// chai.use(sinonChai);

// global.fetch = require('node-fetch');

// import BuzzSumoWrapper from '../src/index';

// describe('Album', () => {
//   let buzz;
//   let stubedFetch;
//   let promise;

//   beforeEach( () => {
//     buzz = new BuzzSumoWrapper({
//       token: 'foo'
//     });

//     stubedFetch = sinon.stub(global, 'fetch');
//     promise = stubedFetch.returnsPromise();
//   });

//   afterEach( () => {
//     stubedFetch.restore();
//   });

//   describe('smoke tests', () => {
//     it('should have getAlbum method', () => {
//       expect(buzz.album.getAlbum).to.exist;
//     });

//     it('should have getAlbums method', () => {
//       expect(buzz.album.getAlbums).to.exist;
//     });

//     it('should have getAlbumTracks method', () => {
//       expect(buzz.album.getTracks).to.exist;
//     });
//   });

//   // describe('getAlbum', () => {
//   //   it('should call fetch method', () => {
//   //     const album = buzz.album.getAlbum();
//   //     expect(stubedFetch).to.have.been.calledOnce;
//   //   });

//   //   it('should call fetch with the correct URL', () => {
//   //     const album = buzz.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
//   //     expect(stubedFetch).to.have.been
//   //       .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

//   //     const album2 = buzz.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTk')
//   //     expect(stubedFetch).to.have.been
//   //       .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTk');
//   //   });

//   //   it('should return the correct data from Promise', () => {
//   //     promise.resolves({ album: 'name'});
//   //     const album = buzz.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
//   //     expect(album.resolveValue).to.be.eql({ album: 'name'});
//   //   });
//   // });

//   // describe('getAlbums', () => {
//   //   it('should call fetch method', () => {
//   //     const albums = buzz.album.getAlbums();
//   //     expect(stubedFetch).to.have.been.calledOnce;
//   //   });

//   //   it('should call fetch with the correct URL', () => {
//   //     const albums = buzz.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
//   //     expect(stubedFetch).to.have.been
//   //       .calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTk');
//   //   });

//   //   it('should return the correct data from Promise', () => {
//   //     promise.resolves({ album: 'name'});
//   //     const albums = buzz.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTk']);
//   //     expect(albums.resolveValue).to.be.eql({ album: 'name'});
//   //   });
//   // });

//   // describe('getAlbumsTracks', () => {
//   //   it('should call fetch method', () => {
//   //     const tracks = buzz.album.getTracks();
//   //     expect(stubedFetch).to.have.been.calledOnce;
//   //   });

//   //   it('should call fetch with the correct URL', () => {
//   //     const tracks = buzz.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
//   //     expect(stubedFetch).to.have.been
//   //       .calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
//   //   });

//   //   it('should return the correct data from Promise', () => {
//   //     promise.resolves({ album: 'name'});
//   //     const tracks = buzz.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
//   //     expect(tracks.resolveValue).to.be.eql({ album: 'name'});
//   //   });
//   // });
// });
