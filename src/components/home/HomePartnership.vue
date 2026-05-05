<script setup>
import { ref } from 'vue';

const partners = ref([
  { name: 'TechFlow', logoUrl: 'https://via.placeholder.com/100', website: 'https://example.com' },
  { name: 'CloudScale', logoUrl: '', website: 'https://example.com' }, // Fallback trigger
  { name: 'Apex Design', logoUrl: 'https://via.placeholder.com/100', website: 'https://example.com' },
  { name: 'Global Link', logoUrl: '', website: 'https://example.com' }, // Fallback trigger
  { name: 'EcoSystems', logoUrl: 'https://via.placeholder.com/100', website: 'https://example.com' },
  { name: 'Quantum', logoUrl: 'https://via.placeholder.com/100', website: 'https://example.com' },
  { name: 'Vertex', logoUrl: '', website: 'https://example.com' },
]);

// Function to get the first letter
const getInitials = (name) => name.charAt(0).toUpperCase();
</script>

<template>
  <section class="bg-white py-12 overflow-hidden">
    <div class="text-center mb-10">
      <h2 class="text-2xl font-bold text-gray-800">Our Trusted Partners</h2>
    </div>

    <div class="relative flex overflow-x-hidden">
      <div class="flex animate-marquee whitespace-nowrap">
        <div 
          v-for="(partner, index) in [...partners, ...partners]" 
          :key="index"
          class="mx-4 flex-shrink-0"
        >
          <a
            :href="partner.website"
            target="_blank"
            class="group flex flex-col items-center p-4 w-40 transition-transform duration-300 hover:scale-110"
          >
            <div class="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gray-50 shadow-sm overflow-hidden bg-white mb-3">
              <img
                v-if="partner.logoUrl"
                :src="partner.logoUrl"
                :alt="partner.name"
                class="w-full h-full object-cover"
              />
              <div 
                v-else 
                class="w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-gradient-to-br from-[#22bbea] to-[#1a8fb3]"
              >
                {{ getInitials(partner.name) }}
              </div>
            </div>

            <span class="text-sm font-semibold text-gray-600 group-hover:text-[#22bbea] transition-colors">
              {{ partner.name }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Custom Marquee Animation */
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}

/* Pause animation on hover for better UX */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>