<template>
  <AppSection title="Назначения сеанса гемодиализа">
      <AppRow title="Программа аппарата">
        <AppButton
          v-for="program in formOptions.programs"
          :key="program.id"
          :class="{ active: form.program?.slug === program.slug }"
          @click="setFormProp('program', program)"
        >
          {{ program.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          title="Диализатор"
          placeholder="Спр. 'Диализаторы'"
          :value="form.dialyzer?.label"
          :modal="{title: 'Диализаторы', formPart: 'dialyze', prop: 'dialyzers'}"
          @selectOption="(option) => setFormProp('dialyzer', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Концентратор"
          placeholder="Спр. 'Концентраторы'"
          :modal="{title: 'Концентраторы', formPart: 'dialyze', prop: 'concentrators'}"
          :value="form.concentrator?.label"
          @selectOption="
            (option) => setFormProp('concentrator', option as IMedicationSchema)
          "
        />
        <AppInput
          title="Объем"
          placeholder="XX л."
          width="8rem"
          :value="
            form.concentrator
              ? String(form.concentrator.volume) +  form.concentrator.unit
              : undefined
          "
          readonly
        />
      </AppRow>
      <AppRow title="Тип инъекции">
        <AppButton
          v-for="injType in formOptions.injectionTypes"
          :key="injType.id"
          :class="{ active: form.injectionType?.slug === injType.slug }"
          @click="setFormProp('injectionType', injType, resetInjectionProps)"
        >
          {{ injType.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Иглы'"
          :value="form.injector?.label"
          :disabled="form.injectionType?.slug != 'needle'"
          :modal="{title: 'Иглы', formPart: 'dialyze', prop: 'needles'}"
          @selectOption="(option) => setFormProp('injector', option as IDeviceSchema)"
        />
        <AppSelect
          placeholder="Спр. 'Типы игл'"
          :value="form.injectionType?.slug === 'needle' ? form.injectorType?.label : undefined"
          :disabled="form.injectionType?.slug != 'needle'"
          :modal="{title: 'Типы игл', formPart: 'dialyze', prop: 'needleTypes'}"
          @selectOption="(option) => setFormProp('injectorType', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Катетеры'"
          :value="form.injectionType?.slug === 'catheter' ? form.injector?.label : undefined"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="{title: 'Катетеры', formPart: 'dialyze', prop: 'catheters'}"
          @selectOption="(option) => setFormProp('injector', option as IDeviceSchema)"
        />
        <AppSelect
          placeholder="Спр. 'Типы катетеров'"
          :value="form.injectionType?.slug === 'catheter' ? form.injectorType?.label : undefined"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="{title: 'Типы катетеров', formPart: 'dialyze', prop: 'catheterTypes'}"
          @selectOption="(option) => setFormProp('injectorType', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Бикарбонат"
          placeholder="XXX гр/л"
          :value="form.bicarbonate ? form.bicarbonate?.label + ' - ' + String(form.bicarbonate?.volume) + form.bicarbonate?.unit : 'XXX гр/л'"
          :modal="{title: 'Бикарбонаты', formPart: 'dialyze', prop: 'bicarbonates'}"
          @selectOption="(option) => setFormProp('bicarbonate', option as IMedicationSchema)"
        />
        <AppInput title="Сухой вес пациента" placeholder="XXX кг" width="8rem" @change="(value) => setFormProp('patientWeight', Number(value))" />
        <AppSelect
          title="Антикоагуляция"
          placeholder="Наименование"
          :value="form.anticoagulant?.label"
          :modal="{title: 'Антикоагуляция', formPart: 'dialyze', prop: 'anticoagulants'}"
          @selectOption="(option) => setFormProp('anticoagulant', option as IMedicationSchema)"
        />
        <AppInput width="8rem" title="Объем" placeholder="XXX ед." :value="form.anticoagulant ? String(form.anticoagulant?.volume) + form.anticoagulant.unit : undefined" readonly />
      </AppRow>
      <AppRow>
        <AppButton @click="isFormReady=true">Сформировать сеанс</AppButton>
      </AppRow>
      <AppRow>
        <DialyzeBoard
          :program="form.program?.label"
          :dialyler="form.dialyzer?.label"
          :concentrator="form.concentrator?.volume.toString()"
          :injectionType="form.injector?.label"
          :bicarbonate="form.bicarbonate?.label"
          :anticoagulant="form.anticoagulant?.volume.toString()"
          :weight="form.patientWeight?.toString()"
          :isReady="isFormReady"
        />
      </AppRow>
  </AppSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import  { AppSection }  from '../'
import { AppRow } from '@/components/blocks'
import { AppButton, AppInput, AppSelect } from '@/components/elements'
import DialyzeBoard from './DialyzeBoard.vue'
import { type IDeviceSchema, type IMedicationSchema } from '@/stores/schemas'
import { formOptions as fo , type IFormOptions, form as fd, setFormProp as sf, type IForm } from '@/forms'


const formOptions = ref<IFormOptions['dialyze']>(fo.dialyze)

const form = fd.value.dialyze

function resetInjectionProps(): void {
  form.injector = undefined
  form.injectorType = undefined
}

function setFormProp<P extends keyof IForm['dialyze']>( prop: P, newProp: IForm['dialyze'][P], onEnd?: Function): void {
  sf('dialyze', {prop: prop, newValue: newProp, onEnd})
}

const isFormReady = ref<boolean>(false)
</script>
