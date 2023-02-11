const axios = require("axios");

class CreateUser {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    this.userId = null;
  }

  async create() {
    try {
      const response = await axios.post(`https://reqres.in/api/users`, {
        name: this.name,
        job: this.job,
      });
      this.userId = await response.data.id;
      console.log("Create User ID :", this.userId);
      return this.userId;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = CreateUser;

// (async function example() {
//   const createUser = new CreateUser("mardoni", "doe");
//   const ha = await createUser.create();
//   console.log(`User ID:`, ha);
// })();
