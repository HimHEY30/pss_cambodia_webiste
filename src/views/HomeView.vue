<template>
  <div class="absolute top-12 w-full">
    <HomeHero></HomeHero>
    <HomeAboutPSS></HomeAboutPSS>
    <HomeImpact></HomeImpact>
    <HomeCambodiaContext></HomeCambodiaContext>
    <Footer></Footer>
  </div>
</template>

<script setup>
import HomeHero from '../components/home/HomeHero.vue';
import HomeAboutPSS from '../components/home/HomeAboutPSS.vue';
import HomeCambodiaContext from '@/components/home/HomeCambodiaContext.vue';
import HomeImpact from '@/components/home/HomeImpact.vue';
import Footer from '@/components/common/Footer.vue';

</script>

<style lang="scss" scoped>

</style>