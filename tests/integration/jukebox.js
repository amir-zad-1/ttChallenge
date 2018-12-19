import chai from "chai";
import chaiHttp from "chai-http";

import config from '../../src/config';

const assert = chai.assert;

chai.use(chaiHttp);

const TEST_JUKEBOX_ID = 1;
const API_URL = `http://localhost:${config.server.port}/jukebox/${TEST_JUKEBOX_ID}/settings`;

describe("Jukebox settings", () => {

  it("should be an array", done => {
    chai.request(API_URL).get("/").end((error, response) => {
      if (error) return done(error);
      assert.equal(Array.isArray(response.body), true);
      done();
    });

  });


});