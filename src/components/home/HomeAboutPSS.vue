<template>
  <section
    ref="sectionRef"
    class="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 sm:px-10 md:px-20 py-16"
  >
    <!-- TEXT -->
    <div
      :class="[
        'flex-1 transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <span
        class="block text-sm tracking-widest uppercase text-secondary leading-tight mb-4"
      >
        {{ $t('home.about.eye_catching_title') }}
      </span>

      <h3
        class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-primary mb-6"
      >
        {{ $t('home.about.title') }}
      </h3>

      <p
        class="text-base sm:text-md md:text-lg leading-relaxed text-gray-600 max-w-xl"
      >
        {{ $t('home.about.subtitle') }}
      </p>
    </div>

    <!-- IMAGE -->
    <div
      :class="[
        'flex-1 transition-all duration-1000 ease-out delay-200',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      ]"
    >
      <img
        src="@/assets/images/home_about_pss.jpg"
        alt="About PSS Cambodia"
        class="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const sectionRef = ref(null);
const isVisible = ref(false);

let observer;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      isVisible.value = entry.isIntersecting; // ✅ toggle both true/false
    },
    {
      threshold: 0.2,
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>