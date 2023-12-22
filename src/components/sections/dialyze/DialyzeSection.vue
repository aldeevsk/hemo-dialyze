<template>
  <section class="section">
    <div class="container">
      <AppRow title="Назначения сеанса гемодиализа">
        <AppButton
          v-for="program in formOptions.programs"
          :key="program.id"
          :class="{ active: dialyzeForm.program?.slug === program.slug }"
          @click="setDialyzeFormProp('program', 'programs', program.slug)"
        >
          {{ program.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          title="Диализатор"
          placeholder="Спр. 'Диализаторы'"
          :category="formOptions.categories.dialyzers"
          :options="toISchema(formOptions.dialyzers)"
          @selectOption="(key, option) => setDialyzeFormProp('dialyzer', 'dialyzers', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Концентратор"
          placeholder="Спр. 'Концентраторы'"
          :category="formOptions.categories.concentrators"
          :options="formOptions.concentrators"
          :value="dialyzeForm.concentrator?.label"
          @selectOption="
            (key, option) => setDialyzeFormProp('concentrator', 'concentrators', option)
          "
        />
        <AppInput title="Объем" placeholder="10 л" width="8rem" :value="dialyzeForm.concentrator ? String(dialyzeForm.concentrator.volume) + dialyzeForm.concentrator.unit : undefined" readonly />
      </AppRow>
      <AppRow title="Тип инъекции">
        <AppButton
          v-for="injType in formOptions.injectionTypes"
          :key="injType.id"
          :class="{ active: dialyzeForm.injectionType?.slug === injType.slug }"
          @click="setDialyzeFormProp('injectionType', 'injectionTypes', injType.slug)"
        >
          {{ injType.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Иглы'"
          :disabled="dialyzeForm.injectionType?.slug != 'needle'"
          :category="formOptions.categories.needles"
          :options="formOptions.needles"
        />
        <AppSelect
          placeholder="Спр. 'Типы игл'"
          :disabled="dialyzeForm.injectionType?.slug != 'needle'"
          :category="formOptions.categories.needleTypes"
          :options="formOptions.needleTypes"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Катетеры'"
          :disabled="dialyzeForm.injectionType?.slug != 'catheter'"
          :category="formOptions.categories.catheters"
          :options="formOptions.dialyzers"
        />
        <AppSelect
          placeholder="Спр. 'Типы катетеров'"
          :disabled="dialyzeForm.injectionType?.slug != 'catheter'"
          :category="formOptions.categories.catheterTypes"
          :options="formOptions.dialyzers"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Бикарбонат"
          placeholder="XXX гр/л"
          :category="formOptions.categories.dialyzers"
          :options="formOptions.dialyzers"
        />
        <AppInput title="Сухой вес пациента" placeholder="XXX кг" width="8rem" />
        <AppSelect
          title="Антикоагуляция"
          placeholder="Наименование"
          :category="formOptions.categories.dialyzers"
          :options="formOptions.dialyzers"
        />
        <AppInput width="8rem" title="Объем" placeholder="XXX ед." readonly />
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
import { useAppointmentStore } from '@/stores/appointment.store'
import { type IDialyzeForm } from '@/stores/forms/dialyze.form'
import {
  type IDialyzeFormOptions,
  dialyzeFormOptions
} from '@/stores/formOptions/dialyze.formOptions'

const appointmentStore = useAppointmentStore()

const formOptions = ref<IDialyzeFormOptions>(dialyzeFormOptions)

const dialyzeForm = ref<IDialyzeForm>(appointmentStore.getProp('dialyze'))

/* function setDialyzeFormProp<K extends keyof IDialyzeForm>(key: K, newValue: IDialyzeForm[K]): void {
    dialyzeForm.value[key] = newValue
    console.log(dialyzeForm.value[key])
    appointmentStore.setProp('dialyze', dialyzeForm.value)
} */

function setDialyzeFormProp<K extends keyof IDialyzeForm>(
  key: K,
  optionName: keyof Omit<IDialyzeFormOptions, 'categories'>,
  optionSlug: string
): void {
  const newValue = formOptions.value[optionName].find((o) => o.slug === optionSlug) as IDialyzeForm[K]
  if (!newValue) return
  dialyzeForm.value[key] = newValue
  console.log(dialyzeForm.value[key])
  appointmentStore.setProp('dialyze', dialyzeForm.value)
}

function toISchema<T extends ISchema>(schemas: T[]): ISchema[] {
  return schemas.map((schema) => {
    return { id: schema['id'], slug: schema['slug'], label: schema['label'] }
  })
}
</script>

<style scoped></style>
