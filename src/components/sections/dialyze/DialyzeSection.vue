<template>
    <section class="section">
        <div class="container">
            <AppRow title="Назначения сеанса гемодиализа">
                <AppButton>HD</AppButton>
                <AppButton>HD</AppButton>
                <AppButton>HD</AppButton>
                <AppInput placeholder="Спр. 'Диализаторы'"/>
                <AppSelect title="Препараты" placeholder="Спр. 'Препараты'"/>
            </AppRow>
        </div>
    </section>
</template>

<script setup lang="ts">
import { AppRow } from '@/components/blocks'
import { AppButton, AppInput, AppSelect } from '@/components/elements'
</script>

<style scoped>

</style>
