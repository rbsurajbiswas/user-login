<template>
  <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
  <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
    <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" class="bg w-full h-full object-cover object-center absolute z-0">
    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="h-24 w-24 object-cover rounded-full">
      <h1 class="text-2xl font-semibold">{{user.name}}</h1>
    </div>
  </div>
  <div class="grid grid-cols-12 bg-white ">

    <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">

      <button @click.prevent="logoutUser" class="text-sm p-2 bg-indigo-200 text-center rounded font-semibold hover:bg-indigo-700 hover:text-gray-200">logout</button>

    </div>

    <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
      <div class="px-4 pt-4">
        <form action="#" class="flex flex-col space-y-8">

          <div>
            <h3 class="text-2xl font-semibold">Basic Information</h3>
            <hr>
          </div>

          <div class="form-item">
            <label class="text-xl ">Full Name</label>
            <p class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200">{{user.name}}</p>
          </div>

          <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">

            <div class="form-item w-full">
              <label class="text-xl ">Designation</label>
              <p class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 ">Web Developer</p>
            </div>

            <div class="form-item w-full">
              <label class="text-xl ">Email</label>
              <p class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 ">{{user.email}}</p>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-semibold ">More About Me</h3>
            <hr>
          </div>

          <div class="form-item w-full">
            <textarea cols="30" rows="10" class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 " disabled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus nobis odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, eveniet fugiat? Explicabo assumenda dignissimos quisquam perspiciatis corporis sint commodi cumque rem tempora! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, perferendis sed expedita consectetur sunt quos neque qui sint, vero omnis eius, assumenda porro ut blanditiis voluptas voluptates unde nobis provident? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, non! Illum beatae quos amet, recusandae impedit sapiente cupiditate quaerat fugiat aliquam dicta sequi voluptas excepturi architecto explicabo id. Porro, laudantium.</textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["user"]),
  methods: {
    ...mapActions(["logout"]),
    ...mapActions(["getProfile"]),
    logoutUser() {
            this.logout();
        }
  },
  created() {
    this.getProfile();
  }
};
</script>

<style>

</style>