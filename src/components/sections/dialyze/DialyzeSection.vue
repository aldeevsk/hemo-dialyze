<template>
    <section class="section">
        <div class="container">
            <AppRow title="Назначения сеанса гемодиализа">
                <AppButton
                    v-for="program in options.programs"
                    :key="program.id"
                    :class="{'active': dialyzeForm.program?.slug === program.slug}"
                    @click="setDialyzeFormProp('program', program)"
                >
                    {{ program.label }}
                </AppButton>
            </AppRow>
            <AppRow>
                <AppSelect title="Диализатор" placeholder="Спр. 'Диализаторы'"/>
            </AppRow>
            <AppRow>
                <AppSelect title="Концентратор" placeholder="Спр. 'Концентраторы'" disabled="true"/>
                <AppInput title="Объем" placeholder="10 л" width="8rem" readonly/>
            </AppRow>
            <AppRow title="Тип инъекции">
                <AppButton
                    v-for="injType in options.injectionTypes"
                    :key="injType.id"
                    :class="{'active': dialyzeForm.injectionType?.slug === injType.slug}"
                    @click="setDialyzeFormProp('injectionType', injType)"
                >
                    {{ injType.label }}
                </AppButton>
            </AppRow>
            <AppRow>
                <AppSelect placeholder="Спр. 'Иглы'"/>
                <AppSelect placeholder="Спр. 'Типы игл'"/>
            </AppRow>
            <AppRow>
                <AppSelect placeholder="Спр. 'Катетеры'"/>
                <AppSelect placeholder="Спр. 'Типы катетеров'"/>
            </AppRow>
            <AppRow>
                <AppSelect title="Бикарбонат" placeholder="XXX гр/л"/>
                <AppInput title="Сухой вес пациента" placeholder="XXX кг"/>
                <AppSelect title="Антикоагуляция" placeholder="Наименование"/>
                <AppInput width="8rem" title="Объем" placeholder="XXX ед." readonly/>
            </AppRow>
            <AppRow>
                <AppButton>Сформировать сеанс</AppButton>
            </AppRow>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppRow } from '@/components/blocks'
import { AppButton, AppInput, AppSelect } from '@/components/elements'
import { useAppointmentStore } from '@/stores/appointment'
import { type IDialyzeForm } from '@/stores/forms/dialyze.form'
import { type IDialyzeOptions, dialyzeOptions } from '@/stores/options/dialyze.options'

const appointmentStore = useAppointmentStore()

const options = ref<IDialyzeOptions>(dialyzeOptions)

const dialyzeForm = ref<IDialyzeForm>(appointmentStore.getProp('dialyze'))

function setDialyzeFormProp<K extends keyof IDialyzeForm>(key: K, newValue: IDialyzeForm[K]): void {
    dialyzeForm.value[key] = newValue
    console.log(dialyzeForm.value[key])
    appointmentStore.setProp('dialyze', dialyzeForm.value)
}

</script>

<style scoped>

</style>
