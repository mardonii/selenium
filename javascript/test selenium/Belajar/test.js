const axios = require("axios");
const assert = require("assert");

var url = "https://reqres.in/api";

async function getListUser() {
  try {
    const response = await axios.get(url + "/users?page=2");
    const data = response.data;
    const firstName = data.data[0].id;
    assert.equal(firstName, 7);
    console.log("GET List Berhasil");
  } catch (error) {
    console.log(error);
  }
}

async function getUserDetail() {
  try {
    const response = await axios.get(url + "/users/2");
    const firstName = response.data.data.first_name;
    assert.equal(firstName, "Janet");
    console.log("GET DETAIL berhasil");
  } catch (error) {
    console.log("GET DETAIL gagal: ", error);
  }
}

async function postUser() {
  try {
    const response = await axios.post(url + "/users", {
      first_name: "Doni",
      last_name: "Doe",
    });
    const firstName = response.data.first_name;
    assert.equal(firstName, "Doni");
    console.log("POST request berhasil");
  } catch (error) {
    console.log("POST request gagal: ", error);
  }
}

async function putUser() {
  try {
    const response = await axios.put(url + "/users/2", {
      first_name: "mardoni",
      last_name: "dokter",
    });
    const firstName = response.data.first_name;
    assert.equal(firstName, "mardoni");
    console.log("PUT Berhasil");
  } catch (error) {
    console.log("PUT SALAH " + error);
  }
}

getUserDetail();
postUser();
getListUser();
putUser();
