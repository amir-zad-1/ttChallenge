import chai from "chai";
import chaiHttp from "chai-http";

import config from '../../src/config';

const assert = chai.assert;

chai.use(chaiHttp);

const TEST_JUKEBOX_ID = 1;
const API_URL = `http://localhost:${config.server.port}/jukebox/${TEST_JUKEBOX_ID}/settings`;

describe("HTTP GET on jukebox/1/settings", () => {
  let configurableSettings = [];
  before(done => {
    chai.request(API_URL).get("/").end((error, response) => {
      if (error) return done(error);
      configurableSettings = response.body;
      done();
    });
  });

  it("should return an array", done => {
    assert.equal(Array.isArray(configurableSettings), true);
    done();
  });

});