<template>
  <section class="section">
    <div class="container">
      <AppRow title="Назначения сеанса гемодиализа">
        <AppButton
          v-for="program in formOptions.programs"
          :key="program.id"
          :class="{ active: form.program?.slug === program.slug }"
          @click="setFormProp('program', 'programs', program.slug)"
        >
          {{ program.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          title="Диализатор"
          placeholder="Спр. 'Диализаторы'"
          :modal="formOptions.categories.dialyzer"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
          @selectOption="(key, option) => setFormProp('dialyzer', 'dialyzers', option)"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Концентратор"
          placeholder="Спр. 'Концентраторы'"
          :modal="formOptions.categories.concentrator"
          :options="{substore: 'devices', listKey: 'concentrators'}"
          :value="form.concentrator?.label"
          @selectOption="
            (key, option) => setFormProp('concentrator', 'concentrators', option)
          "
        />
        <AppInput
          title="Объем"
          placeholder="10 л"
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
          @click="setFormProp('injectionType', 'injectionTypes', injType.slug)"
        >
          {{ injType.label }}
        </AppButton>
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Иглы'"
          :disabled="form.injectionType?.slug != 'needle'"
          :modal="formOptions.categories.needle"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
        <AppSelect
          placeholder="Спр. 'Типы игл'"
          :disabled="form.injectionType?.slug != 'needle'"
          :modal="formOptions.categories.needleType"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          placeholder="Спр. 'Катетеры'"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="formOptions.categories.catheter"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
        <AppSelect
          placeholder="Спр. 'Типы катетеров'"
          :disabled="form.injectionType?.slug != 'catheter'"
          :modal="formOptions.categories.catheterType"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
      </AppRow>
      <AppRow>
        <AppSelect
          title="Бикарбонат"
          placeholder="XXX гр/л"
          :modal="formOptions.categories.dialyzer"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
        <AppInput title="Сухой вес пациента" placeholder="XXX кг" width="8rem" />
        <AppSelect
          title="Антикоагуляция"
          placeholder="Наименование"
          :modal="formOptions.categories.dialyzer"
          :options="{substore: 'devices', listKey: 'dialyzers'}"
        />
        <AppInput width="8rem" title="Объем" placeholder="XXX ед." readonly />
      </AppRow>
      <AppRow>
        <AppButton @click="getSelectOptions('devices', 'concentrators')">Сформировать сеанс</AppButton>
      </AppRow>
      <AppRow>
        <DialyzeBoard
          :program="form.program?.label"
          :dialyler="form.dialyzer?.label"
          :concentrator="form.concentrator?.volume.toString()"
          :injectionType="form.injectionType?.label"
          :bicarbonate="form.bicarbonate?.label"
          :weight="form.patientWeight?.toString()"
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
import {
  type IDialyzeForm,
  type IDialyzeFormOptions,
  dialyzeFormOptions
} from '@/stores/forms/'
import { getOptions } from '@/stores/forms/form.options'

const store = useStore()

const formOptions = ref<IDialyzeFormOptions>(dialyzeFormOptions)

const form = ref<IDialyzeForm>(store.forms.get('dialyze'))


function setFormProp<K extends keyof IDialyzeForm>(
  formProp: K,
  optionName: keyof Omit<IDialyzeFormOptions, 'categories'>,
  optionSlug: string
): void {
  const newValue = formOptions.value[optionName].find(
    (o) => o.slug === optionSlug
  ) as IDialyzeForm[K]
  if (!newValue) return
  form.value[formProp] = newValue
  // store.forms.setFormProp('dialyze', optionSlug, newValue)
  // console.log(form.value[formProp])
  console.log(store.forms.get('dialyze'))
  // appointmentStore.setProp('dialyze', dialyzeForm.value)
}

function getSelectOptions(substore: keyof ReturnType<typeof useStore>, key: string) {
  const options = getOptions(store, substore, key)
  console.log('[getSelectOptions]: ', options)
  return options
}

</script>

<style scoped></style>
