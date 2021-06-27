<template>
  <div>
    <Errors v-if="error" :msg="error"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Errors from "@/components/Errors";

export default {
  components: {
    Errors
  },
  computed: {
    ...mapGetters(["error"])
  }
};
</script>

<style>
</style>
