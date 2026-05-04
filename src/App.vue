<template>
  <div>
    <header class="bg-primary fixed w-full z-50 top-0 left-0 shadow-md">
      <Nabar></Nabar>
    </header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Nabar from './components/common/Nabar.vue';
import Footer from './components/common/Footer.vue';
</script>

<style lang="scss" scoped>

</style>