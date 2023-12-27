<template>
  <section class="section">
    <div class="container">
      <AppRow title="Назначения сеанса гемодиализа">
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
          :modal="{title: 'Диализаторы', subForm: 'dialyze', prop: 'dialyzers'}"
          @selectOption="(option) => setFormProp('dialyzer', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Концентратор"
          placeholder="Спр. 'Концентраторы'"
          :modal="{title: 'Концентраторы', subForm: 'dialyze', prop: 'concentrators'}"
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
              ? String(form.concentrator.volume) + form.concentrator.unit
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
          :modal="{title: 'Иглы', subForm: 'dialyze', prop: 'needles'}"
          @selectOption="(option) => setFormProp('injector', option as IDeviceSchema)"
        />
        <AppSelect
          placeholder="Спр. 'Типы игл'"
          :value="form.injectionType?.slug === 'needle' ? form.injectorType?.label : undefined"
          :disabled="form.injectionType?.slug != 'needle'"
          :modal="{title: 'Типы игл', subForm: 'dialyze', prop: 'needleTypes'}"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(option) => setFormProp('injectorType', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Катетеры'"
          :value="form.injectionType?.slug === 'catheter' ? form.injector?.label : undefined"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="{title: 'Катетеры', subForm: 'dialyze', prop: 'catheters'}"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(option) => setFormProp('injector', option as IDeviceSchema)"
        />
        <AppSelect
          placeholder="Спр. 'Типы катетеров'"
          :value="form.injectionType?.slug === 'catheter' ? form.injectorType?.label : undefined"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="{title: 'Типы катетеров', subForm: 'dialyze', prop: 'catheterTypes'}"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(option) => setFormProp('injectorType', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Бикарбонат"
          placeholder="XXX гр/л"
          :value="form.bicarbonate ? form.bicarbonate?.label + ' - ' + String(form.bicarbonate?.volume) + form.bicarbonate?.unit : 'XXX гр/л'"
          :modal="{title: 'Бикарбонаты', subForm: 'dialyze', prop: 'bicarbonates'}"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(option) => setFormProp('bicarbonate', option as IMedicationSchema)"
        />
        <AppInput title="Сухой вес пациента" placeholder="XXX кг" width="8rem" @change="(value) => setFormProp('patientWeight', Number(value))" />
        <AppSelect
          title="Антикоагуляция"
          placeholder="Наименование"
          :value="form.anticoagulant?.label"
          :modal="{title: 'Антикоагуляция', subForm: 'dialyze', prop: 'anticoagulants'}"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(option) => setFormProp('anticoagulant', option as IMedicationSchema)"
        />
        <AppInput width="8rem" title="Объем" placeholder="XXX ед." :value="form.anticoagulant ? String(form.anticoagulant?.volume) + form.anticoagulant.unit : undefined" readonly />
      </AppRow>
      <AppRow>
        <AppButton @click="formIsReady=true">Сформировать сеанс</AppButton>
      </AppRow>
      <AppRow>
        <DialyzeBoard
          :program="form.program?.label"
          :dialyler="form.dialyzer?.label"
          :concentrator="form.concentrator?.volume.toString()"
          :injectionType="form.injectionType?.label"
          :bicarbonate="form.bicarbonate?.label"
          :anticoagulant="form.anticoagulant?.volume.toString()"
          :weight="form.patientWeight?.toString()"
          :isReady="formIsReady"
        />
      </AppRow>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppRow } from '@/components/blocks'
import { AppButton, AppInput, AppSelect } from '@/components/elements'
import DialyzeBoard from './DialyzeBoard.vue'
import { useStore } from '@/stores'
import { type IDialyzeForm, } from '@/stores/forms/'
import { type IDeviceSchema, type IMedicationSchema } from '@/stores/schemas'
import { formOptions as fo , type IFormOptions } from '@/stores/forms/form.options'

const store = useStore()

const formOptions = ref<IFormOptions['dialyze']>(fo.dialyze)

const form = ref<IDialyzeForm>(store.forms.get('dialyze'))

function resetInjectionProps(): void {
  form.value.injector = undefined
  form.value.injectorType = undefined
}

function setFormProp<P extends keyof IDialyzeForm>( prop: P, newProp: IDialyzeForm[P], onEnd?: Function): void {
  form.value[prop] = newProp
  if(onEnd) onEnd()
}

const formIsReady = ref<boolean>(false)
</script>
