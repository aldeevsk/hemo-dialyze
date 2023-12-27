<template>
  <div class="select">
    <strong v-if="props.title" class="select__title">{{ props.title }}</strong>
    <div class="select__body">
      <AppInput
        :placeholder="props.placeholder"
        :value="props.value"
        @change="(value) =>change"
        :disabled="props.disabled"
      />
      <AppButton :disabled="props.disabled" @click="setOptions()">
        <IconMenu />
      </AppButton>
    </div>
  </div>
  <AppSelectModal
    v-if="modalVisibility"
    @click-on-close="modalVisibility = false"
    :title="props.modal.title"
    :options="optionsList"
    @selectOption="(option) => emit('selectOption', option)"
    @removeOption="(id) => removeOption(id)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppSelectModal from './AppSelectModal.vue'
import { AppInput, AppButton } from '@/components/elements'
import { IconMenu } from '@/components/icons'
import { type TUnionSchema } from '@/stores/schemas'
import { useStore } from '@/stores'
import { type IFormOptions, getOptions } from '@/stores/forms/form.options'


const props = defineProps<{
  title?: string
  placeholder?: string
  disabled?: any
  value?: string
  modal: {
    title: string
    subForm: keyof IFormOptions
    prop: keyof IFormOptions[keyof IFormOptions] | unknown
  }
}>()

const modalVisibility = ref<boolean>(false)

const emit = defineEmits<{
  change: [value: string]
  selectOption: [option: TUnionSchema]
}>()

function change(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}

const optionsList = ref<ISchema[]>([])

const store = useStore()

async function setOptions() {
  const prop = props.modal.prop as keyof IFormOptions[keyof IFormOptions]
  const options = await getOptions(store, props.modal.subForm, prop)
  optionsList.value = options
  modalVisibility.value = true
}
function removeOption(id: number) {
  optionsList.value = optionsList.value.filter(o => o.id !== id)
}
</script>

<style scoped>
.select {
  display: grid;
  align-items: center;
  gap: var(--gap-xs);
}
.select__body {
  display: flex;
  align-items: center;
  gap: var(--gap-xs);
}
.button:active:not(:disabled) > .icon {
  fill: rgb(var(--light));
}
</style>
