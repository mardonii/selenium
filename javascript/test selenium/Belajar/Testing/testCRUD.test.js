const axios = require("axios");

describe("Rerqes Test Suite", () => {
  const url = "https://reqres.in/api";

  it("Get List User", async () => {
    try {
      const response = await axios.get(url + "/users");
      const data = response.data.data;
      const id = data[0].id;
      console.log("🚀 ~ file: testClass.test.js:11 ~ it ~ id", id);
      expect(id).toEqual(1);
    } catch (error) {
      console.log(error);
      fail();
    }
  });

  it("Get Detail User", async () => {
    try {
      const response = await axios.get(url + "/users");
      const data = response.data.data[0];
      const firstName = data.first_name;
      expect(firstName).toEqual("George");
    } catch (e) {
      console.log("Tidak berhasil melakukan Get Detail", e);
      fail();
    }
  });

  it("CREATE User", async () => {
    try {
      const response = await axios.post(url + "/users", {
        name: "mardoni",
        job: "doe",
      });
      const data = response.data;
      console.log(JSON.stringify(data, null, 4));
    } catch (e) {
      console.log(e);
    }
  });
});
