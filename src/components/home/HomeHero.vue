<template>
    <section class="relative w-full h-screen overflow-hidden">
        <img src="@/assets/images/home_hero_bg.jpg" alt="Home Hero Background"
            class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/40"></div>

        <div class="absolute inset-0 flex items-center pl-4 sm:pl-8 md:pl-24">
            <div class="max-w-3xl text-white space-y-4">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">{{ $t('home.hero_title') }}
                </h1>
                <p class="text-base sm:text-md md:text-lg leading-relaxed">{{ $t('home.hero_subtitle') }}</p>
                <button
                    class="px-6 py-3 bg-secondary rounded-lg hover:bg-secondary-light transition-colors duration-300 font-semibold">{{
                        $t('home.hero_button') }}</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped></style>