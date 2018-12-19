import chai from "chai";

import jukboxModel from '../../../src/models/jukebox'

const assert = chai.assert;
const SAMPLE_JUKEBOX_ID = 1;

describe("Jukebox Model", () => {

  describe("getSettings function", () => {

    let jukeboxSettings = null;
    before(done => {
      jukboxModel.getSettings(SAMPLE_JUKEBOX_ID).then(settings => {
        jukeboxSettings = settings;
        done();
      }).catch(error => done(error));
    });

    it("should return an array", done => {
      assert.equal(Array.isArray(jukeboxSettings), true);
      done();
    });

    it("should return an non-empty array", done => {
      assert.isAbove(jukeboxSettings.length, 0);
      done();
    });

    it("returned array should not contain duplicates", done => {
      assert.equal([...new Set(jukeboxSettings)].length, jukeboxSettings.length);
      done();
    });

  });

});