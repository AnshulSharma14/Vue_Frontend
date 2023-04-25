<template>
  <div class container>
    <form @submit.prevent="submitForm">
      <h1 class="title text-white text-center mb-4">Registration form</h1>
      <div class="mb-3 row">
        <div class="col-lg-5">
          <label for="UserName" class="form-label">User Name :</label>
        </div>
        <div class="col-lg-7">
          <input v-model="form.username" type="text" placeholder="Enter your name"
            class="bRadius form-control Gray-color">
        </div>
      </div>
      <!-- <div class="mb-3 row">
        <div class="col-lg-5">
        <label for="Email" class="form-label">Email :</label>
        </div>
        <div class="col-lg-7"> 
        <input 
          type="Email" 
          v-model="form.email" 
          class="bRadius form-control" 
          placeholder="Your Email Here"
        />
      </div>
    </div> -->
      <div class="mb-3 row">
        <div class="col-lg-5">
          <label for="phone_number" class="form-label">Phone Number :</label>
        </div>
        <div class="col-lg-7">
          <input v-model="form.phone_number" type="text" placeholder="Enter Phone Number"
            class="bRadius form-control Gray-color" />
        </div>
      </div>
      <div class="mb-3 row">
        <div class="col-lg-5">
          <label for="Password" class="form-label">Password :</label>
        </div>
        <div class="col-lg-7">
          <input type="password" v-model="form.password" class="bRadius form-control Gray-color"
            placeholder="Your Password Here" />
        </div>
      </div>
      <div class="mb-2 mt-4">
        <button class="bRadius btncs btn">Submit</button>
      </div>
    </form>
    <!-- <div v-if="formSubmitted">
        <h3>Form Submitted</h3>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone Number: {{ phone_number }}</p>
        <small>Click on run to launch the app again.</small>
      </div> -->
  </div>
</template>
<script>
import axios from 'axios';
export default {

  data() {
    return {
      form: {
        username: "",
        phone_number: "",
        password: "",
        // formSubmitted: true
      }
    };

  },
  methods: {
    submitForm() {
      var a = this.form;
      console.log(a);
      axios({
        method: "post",
        url: "http://localhost:8080/demo/webapi/userresource/createuser",
        data: a,
        // headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    },
  }
};
</script>
<style></style>