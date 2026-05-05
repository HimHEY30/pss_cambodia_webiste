<template>
  <section ref="heroSection" class="relative w-full h-screen overflow-hidden">
    <img 
      ref="heroBg"
      src="@/assets/images/home_hero_bg.jpg" 
      alt="Home Hero Background"
      class="absolute inset-0 w-full h-full object-cover scale-110"
    >
    
    <div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/40"></div>

    <div class="absolute inset-0 flex items-center pl-4 sm:pl-8 md:pl-24">
      <div class="max-w-3xl text-white">
        <div class="hero-content space-y-6">
          <div class="overflow-hidden">
            <h1 class="hero-title text-4xl sm:text-5xl md:text-6xl font-bold leading-tight opacity-0 translate-y-12">
              {{ t('home.hero.title') }}
            </h1>
          </div>

          <p class="hero-subtitle text-base sm:text-md md:text-lg leading-relaxed opacity-0 translate-y-8 max-w-2xl">
            {{ t('home.hero.subtitle') }}
          </p>

          <div class="hero-cta opacity-0 translate-y-4">
            <router-link 
              to="/get-involved" 
              class="inline-block px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/80 hover:scale-105 transition-all duration-300 font-bold shadow-lg shadow-secondary/20"
            >
              {{ t('home.hero.button') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0">
      <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
        <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import gsap from 'gsap';

const { t } = useI18n();

const heroSection = ref(null);
const heroBg = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // 1. Slow Zoom-out on Background (Ken Burns Effect)
  gsap.to(heroBg.value, {
    scale: 1,
    duration: 10,
    ease: 'linear',
  });

  // 2. Entrance Animation Sequence
  tl.to('.hero-title', {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.5
  })
  .to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
  }, '-=0.8') // Starts 0.8s early for overlap
  .to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 0.8,
  }, '-=0.6')
  .to('.hero-scroll', {
    opacity: 1,
    duration: 1,
  }, '-=0.2');
});
</script>

<style lang="scss" scoped>
// Ensure text is legible if image fails to load
section {
  background-color: #003366; // Match your primary color
}
</style>