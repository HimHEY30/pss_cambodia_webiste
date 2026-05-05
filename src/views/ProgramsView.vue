<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-sky-500 font-bold uppercase tracking-widest text-sm mb-4 block">Our Curriculum</span>
        <h1 class="text-4xl lg:text-6xl font-extrabold leading-tight mb-8 text-slate-900">
          2-Year <span class="text-[#00AEEF]">IT Training</span> Program
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          Built on 20 years of PNC experience, our program transforms motivated students from zero to job-ready, combining technical mastery with professional development and wellbeing.
        </p>
      </div>
    </section>

    <section class="py-12 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-8">
        <div class="reveal group bg-white border border-slate-100 p-8 lg:p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-sky-200 transition-all duration-500">
          <div class="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#00AEEF] transition-colors">
            <svg class="w-8 h-8 text-[#00AEEF] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h2 class="text-3xl font-extrabold text-slate-900 mb-6">Web Programming</h2>
          <p class="text-slate-600 mb-8 leading-relaxed">
            Graduates gain strong front- and back-end skills, database management, and deployment capabilities.
          </p>
          <div class="space-y-3">
            <p class="text-xs font-black uppercase tracking-widest text-sky-500 mb-4">Career Pathways</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="role in ['Web Programmer', 'Quality Assurance', 'Junior Data Analytics', 'Database Admin']" :key="role" class="px-4 py-2 bg-slate-50 rounded-full text-sm font-semibold text-slate-700 border border-slate-100">
                {{ role }}
              </span>
            </div>
          </div>
        </div>

        <div class="reveal group bg-[#00AEEF] p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white hover:-translate-y-2 transition-all duration-500">
          <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
          </div>
          <h2 class="text-3xl font-extrabold mb-6">System, Network & Cyber</h2>
          <p class="text-sky-50 mb-8 leading-relaxed">
            Hands-on expertise in IT support, networking, system administration, and modern cybersecurity defense.
          </p>
          <div class="space-y-3">
            <p class="text-xs font-black uppercase tracking-widest text-sky-200 mb-4">Career Pathways</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="role in ['System Admin', 'Cloud Admin', 'Cybersecurity Analyst', 'DevOps', 'IT Support']" :key="role" class="px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white border border-white/20 backdrop-blur-md">
                {{ role }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 px-6 bg-slate-50 border-y border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 class="text-4xl font-extrabold text-slate-900 mb-6">
              English & <span class="text-[#00AEEF]">Professional Readiness</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed">
              Technical skills open the door, but professional skills build the career. We integrate language training and soft-skill workshops daily to ensure students are ready for international workplace standards.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 class="font-bold text-[#00AEEF] mb-2">English Immersion</h4>
              <p class="text-xs text-slate-500">Business communication and technical English for IT documentation.</p>
            </div>
            <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h4 class="font-bold text-[#F6A240] mb-2">Soft Skills</h4>
              <p class="text-xs text-slate-500">Critical thinking, problem-solving, and emotional intelligence.</p>
            </div>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="md:col-span-2 bg-[#1A1A1B] text-white p-10 rounded-[2.5rem] relative overflow-hidden group">
            <div class="relative z-10">
              <h3 class="text-2xl font-bold mb-4">Professional Mentoring</h3>
              <p class="text-slate-400 max-w-md leading-relaxed mb-6">
                Every student is paired with a mentor, providing guidance on career paths, interview preparation, and workplace etiquette.
              </p>
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-[#00AEEF]"></div>
                <div class="w-8 h-8 rounded-full bg-white/20"></div>
                <div class="w-8 h-8 rounded-full bg-white/10"></div>
                <span class="text-xs font-bold uppercase tracking-widest ml-2 text-sky-400">Industry Network</span>
              </div>
            </div>
            <div class="absolute right-0 bottom-0 w-48 h-48 bg-[#00AEEF] opacity-10 rounded-tl-full group-hover:scale-110 transition-transform duration-700"></div>
          </div>
          <div class="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-sm flex flex-col justify-center">
            <h3 class="text-xl font-bold mb-3">Employability Support</h3>
            <p class="text-slate-500 text-sm leading-relaxed">
              From CV workshops to mock interviews, our team provides ongoing support until the student secures their first quality job.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal py-24 px-6 max-w-7xl mx-auto">
      <div class="bg-slate-900 rounded-[3rem] p-8 lg:p-20 text-white relative overflow-hidden">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#00AEEF] rounded-full opacity-20 blur-3xl"></div>
        <div class="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 class="text-4xl font-extrabold mb-6">Selection Process</h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              Every year from Jan to Oct, we select 75-100 youth from disadvantaged backgrounds who are motivated to bridge the digital gap.
            </p>
            <div class="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div class="text-3xl font-black text-[#F6A240]">50%</div>
              <div class="text-sm font-bold leading-tight text-slate-300">Target for Female <br/>Students in Tech</div>
            </div>
          </div>
          <div class="space-y-6">
            <div v-for="(step, i) in ['Outreach across Cambodia', 'Written Examination', 'Individual Interviews', 'Social Background Assessment']" :key="step" class="flex items-center gap-6 group">
              <div class="w-12 h-12 rounded-full border-2 border-[#00AEEF] flex items-center justify-center font-black text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                {{ i + 1 }}
              </div>
              <p class="text-xl font-bold">{{ step }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Life Skills & Wellbeing</h2>
        <p class="text-sky-500 font-bold uppercase tracking-widest text-sm">A holistic approach to education</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100">
          <div class="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-[#F6A240]">
             <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Clubs & Extracurriculars</h3>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">Personal development through Music, Sports, and specialized clubs like Photography and Reading.</p>
          <div class="flex flex-wrap gap-2">
            <span class="text-[9px] font-black tracking-widest px-2 py-1 bg-sky-50 text-sky-600 rounded">YOGA</span>
            <span class="text-[9px] font-black tracking-widest px-2 py-1 bg-sky-50 text-sky-600 rounded">MUSIC</span>
          </div>
        </div>

        <div class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100" style="transition-delay: 100ms">
          <div class="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-[#00AEEF]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Full Subsistence</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Secure accommodation, healthy meals, and a monthly allowance to cover all student needs.</p>
        </div>

        <div class="reveal bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100" style="transition-delay: 200ms">
          <div class="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-400">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Health & Support</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Coverage for health costs and socio-educational guidance from our team of dedicated educators.</p>
        </div>
      </div>
    </section>

    <section class="reveal py-20 px-6">
      <div class="max-w-4xl mx-auto bg-[#F6A240] p-12 rounded-[3rem] text-white text-center shadow-2xl">
        <h2 class="text-3xl font-extrabold mb-4">Join our community</h2>
        <p class="mb-8 opacity-90 text-lg">Whether as a student, mentor, or partner, there's a place for you.</p>
        <button class="bg-white text-[#F6A240] px-10 py-4 rounded-md font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
          Contact Us
        </button>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/common/Footer.vue';
import { onMounted } from 'vue';

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

.font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

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