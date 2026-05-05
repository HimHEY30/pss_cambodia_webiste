<template>
  <section class="bg-white py-20 overflow-hidden border-t border-slate-50">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
      <div class="flex items-center gap-3 mb-2">
        <span class="h-px w-8 bg-secondary"></span>
        <h2 class="text-xs font-bold tracking-[0.2em] text-secondary uppercase">
          {{ t('home.partners.title') || 'Our Trusted Partners' }}
        </h2>
      </div>
    </div>

    <div class="relative flex overflow-x-hidden group">
      <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div class="flex animate-marquee whitespace-nowrap py-4">
        <div 
          v-for="(partner, index) in [...partners, ...partners]" 
          :key="index"
          class="mx-12 flex-shrink-0"
        >
          <a
            :href="partner.website"
            target="_blank"
            class="flex flex-col items-center group/item transition-all duration-500"
          >
            <div class="w-24 h-24 rounded-2xl flex items-center justify-center bg-slate-50 border border-transparent group-hover/item:border-blue-100 group-hover/item:bg-white group-hover/item:shadow-xl group-hover/item:shadow-blue-500/5 transition-all duration-500 overflow-hidden mb-4">
              
              <img
                v-if="partner.logoUrl"
                :src="partner.logoUrl"
                :alt="partner.name"
                class="w-16 h-16 object-contain filter grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500"
              />
              
              <div 
                v-else 
                class="w-full h-full flex items-center justify-center text-white text-3xl font-black bg-slate-200 group-hover/item:bg-primary transition-colors duration-500"
              >
                {{ getInitials(partner.name) }}
              </div>
            </div>

            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover/item:text-primary transition-colors duration-300">
              {{ partner.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const partners = [
  { name: 'TechFlow', logoUrl: 'https://cdn.worldvectorlogo.com/logos/google-2015.svg', website: '#' },
  { name: 'CloudScale', logoUrl: '', website: '#' },
  { name: 'Apex Design', logoUrl: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg', website: '#' },
  { name: 'Global Link', logoUrl: '', website: '#' },
  { name: 'EcoSystems', logoUrl: 'https://cdn.worldvectorlogo.com/logos/coca-cola-6.svg', website: '#' },
  { name: 'Quantum', logoUrl: 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg', website: '#' },
];

const getInitials = (name) => name.charAt(0).toUpperCase();
</script>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

/* Slow down on hover for a premium feel */
.group:hover .animate-marquee {
  animation-play-state: paused;
}

/* Ensure images don't look blurry */
img {
  image-rendering: -webkit-optimize-contrast;
}
</style>