const request = require("supertest");
const app = require("../../../app");
const Models = require("../../../models/index");

describe("Post -> Create an template", () => {
  const template = {
    name: "teste 55",
    html: "Hello World",
  };
  it("Create an template", async () => {
    return await request(app)
      .post("/api/v1/templetes/create")
      .send(template)
      .expect("Content-Type", /json/)
      .expect(201)
      .expect({ message: "Template created" });
  });
  afterAll(async () => {
    await Models.Templete.destroy({ where: { name: "teste 55" } });
  });
});
describe("Get -> Get all templates", () => {
  it("should return all templates", async () => {
    return await request(app)
      .get("/api/v1/templetes")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
