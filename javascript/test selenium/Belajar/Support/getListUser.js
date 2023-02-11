const axios = require("axios");

class ListUser {
  constructor(number) {
    this.url = "https://reqres.in/api";
    this.number = number;
  }

  async listUser() {
    try {
      const response = await axios.get(`${this.url}/users`);
      const data = response.data.data[this.number].id;
      console.log(data);
    } catch (error) {
      console.error("gagal", error);
    }
  }
}

(async function example() {
  const list = new ListUser(0);
  await list.listUser();
  console.log(list.listUser());
})();
