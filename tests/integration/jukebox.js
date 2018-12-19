import chai from "chai";
import chaiHttp from "chai-http";

import config from '../../src/config';

const assert = chai.assert;

chai.use(chaiHttp);

const TEST_JUKEBOX_ID = 1;
const API_URL = `http://localhost:${config.server.port}/jukebox/${TEST_JUKEBOX_ID}/settings`;

describe("Jukebox settings", () => {
  let configurableSettings = [];
  before(done => {
    chai.request(API_URL).get("/").end((error, response) => {
      if (error) return done(error);
      configurableSettings = response.body;
      done();
    });
  });


  it("should be an array", done => {
    assert.equal(Array.isArray(configurableSettings), true);
    done();
  });

  it("should not contain duplicates", done => {
    assert.equal([...new Set(configurableSettings)].length, configurableSettings.length);
    done();
  });


});