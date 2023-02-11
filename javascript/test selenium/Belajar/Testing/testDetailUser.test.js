const axios = require("axios");

const CreateUser = require("./createUser");

describe("Coba Detail dari Class", () => {
  it("Coba", async () => {
    const data = new CreateUser("mardoni", "dokter");
    const id = await data.create();

    console.log(id, "hahaa");
    const response = await axios.get("https://reqres.in/api/users/", id);
    console.log(JSON.stringify(response.data, null, 4));
  });
});
