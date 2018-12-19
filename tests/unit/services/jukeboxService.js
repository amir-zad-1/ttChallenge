import chai from "chai";

import jukeboxService from '../../../src/services/jukeboxService'

const assert = chai.assert;

const SAMPLE_JUKEBOX_ID = 1;

describe("Jukebox Service", () => {

  describe("getComponents function", () => {

    let jukeboxComponents = null;
    before(done => {
      jukeboxService.getComponents(SAMPLE_JUKEBOX_ID).then(components => {
        jukeboxComponents = components;
        done();
      }).catch(error => done(error));
    });

    it("should return an array", done => {
      assert.equal(Array.isArray(jukeboxComponents), true);
      done();
    });

    it("returned array should contain audio", done => {
      assert.equal(jukeboxComponents.includes('audio'),true);
      done();
    });

  });

});