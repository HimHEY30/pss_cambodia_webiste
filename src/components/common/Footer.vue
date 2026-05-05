<template>
    <footer class="bg-slate-900 text-white py-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p class="text-sm">{{ t('footer.copy') }}</p>
        </div>
    </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss" scoped>

</style>