<template>
  <Nav/>
  <router-view/>
</template>

<style>
  @import "assets/css/bootstrap.css";
  @import "assets/css/style.css";
</style>

<script>
  import Nav from "@/components/Nav";
  export default {
    components: {Nav}
  }

</script>
