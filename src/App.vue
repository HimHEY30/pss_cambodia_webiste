<template>
  <div>
    <header class="bg-blue-400 p-2">
      <Nabar></Nabar>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup>
import Nabar from './components/common/Nabar.vue';
</script>

<style lang="scss" scoped>

</style>