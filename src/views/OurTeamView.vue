<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#00AEEF] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Leadership & Governance</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900">
          The People <br/><span class="text-[#00AEEF]">Behind PSS.</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          Our team combines decades of experience in education, technology, and social impact to ensure every student has the support they need to succeed.
        </p>
      </div>
    </section>

    <section class="py-12 px-6 max-w-7xl mx-auto">
      <div class="flex items-center gap-4 mb-16">
        <h2 class="text-2xl font-extrabold text-slate-900">Executive Committee</h2>
        <div class="h-[2px] flex-1 bg-slate-100"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        <div v-for="(member, i) in executiveTeam" :key="member.name" 
             class="reveal group"
             :style="{ transitionDelay: `${i * 100}ms` }">
          
          <div class="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 bg-slate-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />

            <div class="absolute top-6 right-6 z-20">
              <div class="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#00AEEF] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>

          <div class="px-2">
            <h3 class="text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#00AEEF] transition-colors">{{ member.name }}</h3>
            <p class="text-sky-500 font-bold uppercase tracking-widest text-[10px]">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 bg-slate-50 px-6 mt-20 border-y border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Board of Directors</h2>
          <p class="text-slate-500 max-w-2xl mx-auto italic">Providing strategic oversight and ensuring the long-term sustainability of our mission.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="board in boardMembers" :key="board.name" 
               class="bg-white p-8 rounded-[2rem] border border-white hover:border-sky-200 hover:shadow-xl transition-all duration-300 group">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00AEEF] transition-colors">
                 <img :src="`https://ui-avatars.com/api/?name=${board.name}&background=f1f5f9&color=00AEEF&bold=true`" class="rounded-xl w-12 h-12" />
              </div>
              <div>
                <h4 class="font-bold text-slate-900 text-lg leading-tight">{{ board.name }}</h4>
                <p class="text-sky-500 font-bold uppercase tracking-tighter text-[10px] mt-1">{{ board.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 text-center px-6">
      <div class="max-w-4xl mx-auto relative group">
        <div class="absolute inset-0 bg-[#00AEEF] rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 -z-10 shadow-xl shadow-sky-100"></div>
        <div class="bg-slate-900 p-12 lg:p-20 rounded-[3rem] text-white -rotate-1 group-hover:rotate-0 transition-transform duration-500">
          <h2 class="text-3xl lg:text-4xl font-extrabold mb-6">Want to make an impact?</h2>
          <p class="text-slate-400 mb-10 text-lg">We are always looking for passionate educators and professionals to join our community.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="bg-[#F6A240] text-white px-10 py-4 rounded-md font-black uppercase tracking-widest hover:bg-[#00AEEF] transition-all">
              Careers at PSS
            </button>
            <button class="border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-md font-black uppercase tracking-widest transition-all">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import { onMounted } from 'vue';

const executiveTeam = [
  { 
    name: 'Mr. Hang Hybunna', 
    role: 'Director',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' // Placeholder: Mature professional male
  },
  { 
    name: 'Mrs. Sok Sreysros', 
    role: 'Director of Administration and Finance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop' // Placeholder: Professional female
  },
  { 
    name: 'Ms. Leng Sreynich', 
    role: 'Director of External Relation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Ms. Hok Lihuy', 
    role: 'Director of Training',
    image: 'https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Mr. Seang Thaina', 
    role: 'Director of Student Selection and Career Guidance',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop' 
  },
  { 
    name: 'Mr. Hul Sim', 
    role: 'Director of Education',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop' 
  }
];

const boardMembers = [
  { name: 'Mr. Phou Sophorn', role: 'Chairman' },
  { name: 'Mr. Oun Suosdey', role: 'Member' },
  { name: 'Mrs. Va Vannakserreyraksmey', role: 'Member' },
  { name: 'Mrs. Heang Oumoy', role: 'Member' },
  { name: 'Mr. Thun Chantha', role: 'Member' }
];

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

.font-sans {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; }
</style>