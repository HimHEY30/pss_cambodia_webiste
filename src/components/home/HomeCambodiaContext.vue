<template>
  <section ref="contextSection" class="py-24 bg-white font-sans overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <div class="mb-16 max-w-2xl animate-item opacity-0">
        <h2 class="text-sm font-semibold tracking-widest text-secondary uppercase mb-3">
          {{ t('home.cambodia_context_eye_catching_title') }}
        </h2>
        <h3 class="text-5xl md:text-6xl font-bold text-primary leading-none">
          {{ t('home.cambodia_context_title') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div class="stat-card p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8">
          <div class="mb-5 text-primary">
            <MapPinIcon :size="32" stroke-width="1.5" />
          </div>
          <div class="text-4xl font-bold text-slate-900 mb-2">{{ t('home.context_s1_value') }}</div>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ t('home.context_s1_label') }}
          </p>
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ t('home.context_s1_source') }}</span>
        </div>

        <div class="stat-card p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8">
          <div class="mb-5 text-primary">
            <TrendingDownIcon :size="32" stroke-width="1.5" />
          </div>
          <div class="text-4xl font-bold text-slate-900 mb-2">{{ t('home.context_s2_value') }}</div>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ t('home.context_s2_label') }}
          </p>
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ t('home.context_s2_source') }}</span>
        </div>

        <div class="stat-card p-8 rounded-2xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8">
          <div class="mb-5 text-primary">
            <GraduationCapIcon :size="32" stroke-width="1.5" />
          </div>
          <div class="text-4xl font-bold text-slate-900 mb-2">{{ t('home.context_s3_value') }}</div>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ t('home.context_s3_label') }}
          </p>
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ t('home.context_s3_source') }}</span>
        </div>

        <div class="stat-card p-8 rounded-2xl border-2 border-blue-50 bg-white hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8 lg:scale-105 shadow-sm">
          <div class="mb-5 text-primary">
            <MicroscopeIcon :size="32" stroke-width="1.5" />
          </div>
          <div class="text-4xl font-bold text-slate-900 mb-1">{{ t('home.context_s4_value') }}</div>
          <div class="text-sm font-semibold text-primary mb-3">{{ t('home.context_s4_title') }}</div>
          
          <div class="space-y-3 mb-4">
            <div class="flex justify-between items-end text-[10px] font-bold uppercase tracking-tighter text-slate-400">
              <span>{{ t('home.context_s4_men') }}</span>
              <span>{{ t('home.context_s4_gap') }}</span>
              <span>{{ t('home.context_s4_women') }}</span>
            </div>
            <div class="h-1.5 w-full bg-slate-100 rounded-full flex overflow-hidden">
              <div class="h-full bg-primary w-[71%]"></div> <div class="h-full bg-blue-200 w-[29%]"></div> </div>
            <p class="text-xs text-slate-500 italic">
              {{ t('home.context_s4_label') }}
            </p>
          </div>
          
          <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">{{ t('home.context_s4_source') }}</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { 
  MapPinIcon, 
  TrendingDownIcon, 
  GraduationCapIcon, 
  MicroscopeIcon 
} from 'lucide-vue-next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const { t } = useI18n();

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const contextSection = ref(null);

onMounted(() => {
  const ctx = gsap.context(() => {
    // Animate Header
    gsap.to('.animate-item', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.animate-item',
        start: 'top 85%',
      }
    });

    // Staggered Cards Animation
    gsap.to('.stat-card', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.stat-card',
        start: 'top 80%',
      }
    });
  }, contextSection.value);
});
</script>

<style scoped>
/* Custom hover effect for cards */
.stat-card:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: #e2e8f0;
}

/* Ensure font stack is clean */
section {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>