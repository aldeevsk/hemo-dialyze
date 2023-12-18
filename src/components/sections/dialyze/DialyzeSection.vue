<template>
    <section class="section">
        <div class="container">
            <AppRow title="Назначения сеанса гемодиализа">
                <AppButton>HD</AppButton>
                <AppButton>HDF</AppButton>
                <AppButton>UF</AppButton>
            </AppRow>
            <AppRow>
                <AppSelect title="Диализатор" placeholder="Спр. 'Диализаторы'"/>
            </AppRow>
            <AppRow>
                <AppSelect title="Концентратор" placeholder="Спр. 'Концентраторы'" disabled="true"/>
                <AppInput title="Объем" placeholder="10 л" width="8rem" readonly/>
            </AppRow>
            <AppRow title="Тип инъекции">
                <AppButton>Игла</AppButton>
                <AppButton>Катетер</AppButton>
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
