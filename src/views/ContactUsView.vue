<template>
  <div class="bg-white text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
    
    <section class="relative px-6 py-16 lg:py-24 max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto animate-fade-in-up">
        <span class="text-[#00AEEF] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get in Touch</span>
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight mb-8 text-slate-900">
          We’d love to <br/><span class="text-[#00AEEF]">hear from you.</span>
        </h1>
        <p class="text-lg text-slate-600 leading-relaxed">
          Have questions about our programs, partnerships, or how to support our students? Our team is here to help.
        </p>
      </div>
    </section>

    <section class="reveal py-12 px-6 max-w-7xl mx-auto mb-24">
      <div class="grid lg:grid-cols-5 gap-12 items-start">
        
        <div class="lg:col-span-3 bg-white border border-slate-100 p-8 lg:p-12 rounded-[3rem] shadow-2xl shadow-slate-100">
          <form @submit.prevent class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                <input type="text" placeholder="John Doe" class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                <input type="email" placeholder="john@example.com" class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
              <select class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all appearance-none">
                <option>General Inquiry</option>
                <option>Partnership Opportunities</option>
                <option>Student Admissions</option>
                <option>Donation Questions</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
              <textarea rows="5" placeholder="How can we help you?" class="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all"></textarea>
            </div>

            <button class="w-full bg-[#00AEEF] hover:bg-slate-900 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-lg shadow-sky-100 hover:shadow-none">
              Send Message
            </button>
          </form>
        </div>

        <div class="lg:col-span-2 space-y-8">
          <div class="bg-[#F6A240] p-10 rounded-[3rem] text-white shadow-xl shadow-orange-100 group hover:-translate-y-2 transition-all duration-500">
            <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="text-2xl font-black mb-4">Visit Us</h3>
            <p class="text-orange-50 leading-relaxed">
              Phum Mol, Sangkat Dangkor, <br/>
              Khan Dangkor, Phnom Penh,<br/>
              Cambodia.
            </p>
          </div>

          <div class="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-6">
            <div class="flex items-center gap-6 group">
              <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Us</p>
                <p class="font-bold text-slate-700">info@psscambodia.org</p>
              </div>
            </div>

            <div class="flex items-center gap-6 group">
              <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#00AEEF] group-hover:bg-[#00AEEF] group-hover:text-white transition-all">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Call Us</p>
                <p class="font-bold text-slate-700">+855 (0) 23 995 500</p>
              </div>
            </div>
          </div>

          <div class="flex gap-4 px-4">
             <a href="#" v-for="i in 4" :key="i" class="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#00AEEF] hover:border-[#00AEEF] transition-all">
                <component :is="socialIcons[i-1]" class="w-5 h-5" />
             </a>
          </div>
        </div>
      </div>
    </section>

    <section class="reveal px-6 max-w-7xl mx-auto mb-24">
      <div class="w-full h-[500px] bg-slate-100 rounded-[4rem] overflow-hidden relative border-8 border-white shadow-2xl">
        <div class="absolute inset-0 bg-slate-200 flex items-center justify-center">
          <div class="text-center">
            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce shadow-lg">
              <svg class="w-8 h-8 text-[#00AEEF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <p class="font-black text-slate-400 uppercase tracking-widest">Interactive Map Placeholder</p>
            <p class="text-xs text-slate-400">Embed Google Maps Iframe Here</p>
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
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-vue-next';

const socialIcons = [Facebook, Instagram, Linkedin, Youtube];

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