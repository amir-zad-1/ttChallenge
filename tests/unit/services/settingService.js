import chai from "chai";

import settingService from '../../../src/services/settingService'

const assert = chai.assert;

describe("Setting Service", () => {

  describe("getAll function", () => {

    let allSettings = null;
    before(done => {
      settingService.getAll().then(settings => {
        allSettings = settings;
        done();
      }).catch(error => done(error));
    });

    it("should return an array of objects", done => {
      assert.equal(Array.isArray(allSettings), true);
      assert.equal(typeof allSettings[0] === "object", true);
      done();
    });

    it("requires key for an item in returned array should be an array", done => {
      assert.equal(Array.isArray(allSettings[0].requires), true);
      done();
    });

  });

});