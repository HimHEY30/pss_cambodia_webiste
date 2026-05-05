<template>
  <footer class="w-full text-white font-sans">
    <div class="bg-primary py-12 px-6 lg:px-8">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="@/assets/images/pss_logo.png" alt="PSS Logo" class="w-16 h-16">
            <div class="text-white">
                <p class="text-2xl font-bold leading-none">{{ t('menu.pss_name')}}</p>
                <p class="text-sm"> {{ t('menu.pss_stand_for') }}</p>
            </div>
          </div>
          <p class="text-slate-50 leading-relaxed text-sm opacity-90">
            {{ t('home.hero_subtitle') }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block text-slate-00">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.home")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.about")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.team")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.programs")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.impact")}}
              </a>
            </li>
            <li>
              <a class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ t("menu.get_involved")}}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Contact Us</h3>
          <ul class="space-y-4">
            <li v-for="item in contactInfo" :key="item.text" class="flex items-start space-x-3 group">
              <component :is="item.icon" class="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
              <span class="text-sm text-slate-50">{{ item.text }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Legal</h3>
          <ul class="space-y-3">
            <li v-for="legal in legalLinks" :key="legal.name">
              <a :href="legal.href" class="text-slate-50 hover:text-slate-300 transition-colors duration-200 text-sm">
                {{ legal.name }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div class="bg-[#22bbea] brightness-90 py-6 px-6 border-t border-white/10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-100/80">
        <p>&copy; {{ currentYear }} Promotting Skills for Success. All rights reserved.</p>
        <div class="mt-4 md:mt-0 flex space-x-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { computed } from 'vue';
import { 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-vue-next';

// Data Arrays for Clean Maintenance
const quickLinks = [
  { name: t('menu.home'), href: '#' },
  { name: t('menu.about'), href: '#' },
  { name: t('menu.team'), href: '#' },
  { name: t('menu.programs'), href: '#' },
  { name: t('menu.impact'), href: '#' },
  { name: t('menu.get_involved'), href: '#' },
];

const contactInfo = [
  { icon: Mail, text: 'psscambodia@info.com' },
  { icon: Phone, text: '(+855) 123-456-7890' },
  { icon: MapPin, text: 'Phnom Penh Cambodia' },
];

const legalLinks = [
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Cookie Policy', href: '#' },
];

// Dynamic Year Logic
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>

</style>