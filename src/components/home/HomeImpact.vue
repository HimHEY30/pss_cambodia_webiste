<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  GraduationCap, 
  Briefcase, 
  Clock, 
  Users 
} from 'lucide-vue-next';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const statsContainer = ref(null);

// Statistics Data
const stats = [
  { 
    value: 1800, 
    suffix: '+', 
    label: 'Graduates', 
    sub: 'Since 2005, built on 20 years of PNC experience',
    icon: GraduationCap 
  },
  { 
    value: 98, 
    suffix: '%', 
    label: 'Employment', 
    sub: 'Working in the IT sector',
    icon: Briefcase 
  },
  { 
    value: 92, 
    suffix: '%', 
    label: 'Placement Rate', 
    sub: 'Found a job within 2 months',
    icon: Clock 
  },
  { 
    value: 52, 
    suffix: '%', 
    label: 'Young Women', 
    sub: 'Bridging the gender gap in tech',
    icon: Users 
  }
];

onMounted(() => {
  const ctx = gsap.context(() => {
    // Header Fade-in from Left
    gsap.from(".animate-header", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
      }
    });

    // Stats Card Stagger + Count-up
    const cards = gsap.utils.toArray(".stat-card");
    
    cards.forEach((card, index) => {
      const counter = card.querySelector(".counter");
      const targetValue = stats[index].value;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      });

      tl.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .to(counter, {
        innerText: targetValue,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power2.out"
      }, "-=0.4");
    });
  }, sectionRef.value);
});
</script>

<template>
  <section 
    ref="sectionRef" 
    class="relative w-full py-20 px-6 lg:px-16 overflow-hidden"
    style="background-color: #22bbea;"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      <div class="animate-header space-y-6">
          <span
        class="block text-sm tracking-widest uppercase text-shadow-lg text-white leading-tight mb-4"
      >
        Our Impact
      </span>
        <h2 class="text-secondary text-shadow-lg text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Real Lives, <br />
          <span class="text-blue-50">Real Change</span>
        </h2>
        
        <p class="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl">
          At PSS in partnership with PSS and others, we believe real impact is measured in real outcomes, 
          skills gained, futures transformed, and communities strengthened. Our program empowers young 
          people—especially those from rural and disadvantaged backgrounds—with the technical expertise 
          and professional support needed to thrive in the digital economy.
        </p>

        <div class="pt-4">
          <div class="inline-flex items-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
            <p class="text-white text-sm md:text-base italic">
              "With complete support for accommodation, food, equipment, and fully covered health costs, students can focus on learning and building a stable future."
            </p>
          </div>
        </div>
      </div>

      <div ref="statsContainer" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="stat-card group bg-white p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-default"
        >
          <div class="mb-4 inline-block p-3 bg-blue-50 rounded-lg text-[#22bbea] group-hover:bg-[#22bbea] group-hover:text-white transition-colors duration-300">
            <component :is="stat.icon" :size="28" />
          </div>
          
          <div class="flex items-baseline space-x-1">
            <span class="counter text-4xl font-extrabold text-gray-900">0</span>
            <span class="text-3xl font-bold text-gray-900">{{ stat.suffix }}</span>
          </div>
          
          <h4 class="text-xl font-bold text-gray-800 mt-1">{{ stat.label }}</h4>
          <p class="text-gray-500 text-sm mt-2 leading-snug">
            {{ stat.sub }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Ensure GSAP uses the raw text for number counting */
.counter {
  font-variant-numeric: tabular-nums;
}
</style>