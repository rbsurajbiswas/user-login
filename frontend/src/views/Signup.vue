<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome
        </h1>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your new account
        </h2>
        <br>
        <br>
      </div>
      <form @submit.prevent="signupUser" class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input id="name" name="name" type="text" autocomplete="name" required="" v-model="name" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
          </div>
          <br>
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input id="email" name="email" type="email" autocomplete="email" required="" v-model="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <br>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="" required="" v-model="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <br>
          <div>
            <label for="confirm_password" class="sr-only">Confirm Password</label>
            <input id="confirm_password" name="confirm_password" type="password" v-model="confirm_password" autocomplete="" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign up
          </button>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <p>Already have an account?</p>
          </div>

          <div class="text-sm">
            <router-link to="/" class="font-medium text-indigo-600 hover:text-indigo-500">Login Now!</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  },
  methods: {
    ...mapActions(["signup"]),
    signupUser() {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password
      };
      this.signup(user).then(res => {
        if (res.data.success) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style>

</style>