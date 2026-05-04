<template>
  <section ref="sectionRef" class="relative w-full min-h-screen overflow-hidden px-4 sm:px-8 md:px-24 py-20">

    <!-- Header -->
    <div
      class="max-w-4xl mx-auto text-center transition-all duration-700 ease-out"
      :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <span class="text-sm tracking-widest uppercase text-secondary">
        {{ $t('home.cambodia_context_eye_catching_title') }}
      </span>

      <h3 class="text-2xl sm:text-4xl md:text-6xl font-semibold leading-tight text-primary mt-4">
        {{ $t('home.cambodia_context_title') }}
      </h3>
    </div>

    <!-- Cards -->
    <div class="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <div
        v-for="(item, index) in stats"
        :key="index"
        class="p-8 border border-gray-200 rounded-xl shadow-md bg-white text-center
               transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1"
        :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
        :style="{ transitionDelay: sectionVisible ? index * 120 + 'ms' : '0ms' }"
      >
        <h1 class="text-4xl sm:text-5xl font-bold text-primary">
          {{ item.value }}
        </h1>
        <p class="mt-2 text-gray-600">
          {{ item.label }}
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const sectionRef = ref(null)
const sectionVisible = ref(false)

const stats = [
  { value: t('home.context_s1_value'), label: t('home.context_s1_label') },
  { value: t('home.context_s2_value'), label: t('home.context_s2_label') },
  { value: t('home.context_s3_value'), label: t('home.context_s3_label') },
  { value: t('home.context_s4_value'), label: t('home.context_s4_label') }
]

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      sectionVisible.value = entry.isIntersecting
    },
    {
      threshold: 0.2 // trigger when 20% visible
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>