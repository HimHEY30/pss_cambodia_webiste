<template>
  <div class="flex flex-col min-h-screen">
    <header  class="bg-primary fixed w-full z-50 top-0 left-0 shadow-md">
      <Nabar></Nabar>
    </header>
    <main class="flex-grow pt-20">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Nabar from './components/common/Nabar.vue';
</script>

<style lang="scss" scoped>

</style>