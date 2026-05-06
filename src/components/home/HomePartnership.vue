<script setup>
import APD from '@/assets/images/partnership_logo/apd.jpg';
import Amret from '@/assets/images/partnership_logo/amret.png';
import ANZ from '@/assets/images/partnership_logo/jtrust.png';
import Bred from '@/assets/images/partnership_logo/bred.webp';
import NTC from '@/assets/images/partnership_logo/ntc-logo.png';
import Sourcemax from '@/assets/images/partnership_logo/Sourceamax-Asia.jpg';
import FIRSTCAMBODIA from '@/assets/images/partnership_logo/firstcambodia_logo.jpg';
import HRInc from '@/assets/images/partnership_logo/hrinc_sq_logo.png';
import DaiIchi from '@/assets/images/partnership_logo/daiichi.jpeg';
import BizSolutions from '@/assets/images/partnership_logo/biz.png';
import Udaya from '@/assets/images/partnership_logo/udaya.png';
import Codinggate from '@/assets/images/partnership_logo/codinggate.png';
import Confluence from '@/assets/images/partnership_logo/confluences.png';
import theNGO from '@/assets/images/partnership_logo/thengo.png';
import Niyda from '@/assets/images/partnership_logo/niyda.jpg';
import bikay from '@/assets/images/partnership_logo/bikay.jpg';
import itSolution from '@/assets/images/partnership_logo/it_solution.png';
import idealink from '@/assets/images/partnership_logo/idealink.png';
import endeavour from '@/assets/images/partnership_logo/endeavour.webp';
import thalias from '@/assets/images/partnership_logo/thalias.webp';
import BondosKomar from '@/assets/images/partnership_logo/bondoskoma.png';
import { ref } from 'vue';

// Simple Data Structure: Array of 20 Partner Objects
const partners = ref(
  [
    { id: 1, name: 'APD Bank', logo: APD },
    { id: 2, name: 'Amret', logo: Amret },
    { id: 3, name: 'J Trust Royal Bank', logo: ANZ },
    { id: 4, name: "BRED Bank", logo: Bred },
    { id: 5, name: 'NTC', logo: NTC },
    { id: 6, name: 'Sourceamax Asia', logo: Sourcemax },
    { id: 7, name: 'First Cambodia', logo: FIRSTCAMBODIA },
    { id: 8, name: 'HRINC. Cambodia', logo: HRInc },
    { id: 9, name: 'Dai-ichi Life', logo: DaiIchi },
    { id: 10, name: 'Biz Solution', logo: BizSolutions },
    { id: 11, name: 'UDAYA Technology', logo: Udaya },
    { id: 12, name: 'Codinggate', logo: Codinggate },
    { id: 13, name: 'Confluences', logo: Confluence },
    { id: 14, name: 'The NGO Forum', logo: theNGO },
    { id: 15, name: 'Niyda', logo: Niyda },
    { id: 16, name: 'Bikay', logo: bikay },
    { id: 17, name: 'IT Solution', logo: itSolution },
    { id: 18, name: 'Idealink', logo: idealink },
    { id: 19, name: 'Endeavour', logo: endeavour },
    { id: 20, name: 'Thalias', logo: thalias },
    { id: 21, name: 'Bondos Komar', logo: BondosKomar }
  ]
);
</script>

<template>
  <section class="py-16 px-4 bg-white">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-12">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Partners
        </h2>
        <p class="mt-3 text-lg text-gray-500">
          Working together with world-class organizations.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="flex flex-col items-center justify-center p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="h-16 w-full flex items-center justify-center mb-4">
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-h-full max-w-full object-contain"
            />
          </div>

          <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400 text-center">
            {{ partner.name }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Standard CSS for fine-tuning letter spacing if needed */
span {
  font-family: 'Inter', sans-serif;
}
</style>