<template>
    <nav>
        <div class="flex gap-2 items-center">
            <img src="@/assets/images/pss_logo.png" alt="PSS Logo" class="w-10 h-10">
            <div>
                <h1 class="font-bold text-lg leading-none">PSS Cambodia</h1>
                <p class="text-sm">Promoting Skills for Success</p>
            </div>
        </div>
        <a>{{ $t('menu.home') }}</a>
        <a>{{ $t('menu.about') }}</a>
        <a>{{ $t('menu.contact') }}</a>
        <button @click="changeLanguage('en')">English</button>
        <button @click="changeLanguage('km')">Khmer</button>
    </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n();

const changeLanguage = (lang:string) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
}

</script>

<style lang="scss" scoped></style>