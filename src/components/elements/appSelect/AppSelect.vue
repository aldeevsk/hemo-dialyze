<template>
  <div class="select">
    <strong v-if="props.title" class="select__title">{{ props.title }}</strong>
    <div class="select__body">
      <AppInput
        :placeholder="props.placeholder"
        :value="props.value"
        @change="change"
        :disabled="props.disabled"
      />
      <AppButton :disabled="props.disabled" @click="setOptions()">
        <IconMenu />
      </AppButton>
    </div>
  </div>
  <AppSelectModal
    v-if="modal"
    @click-on-close="modalVisibility = false"
    :modal="props.modal"
    :options="optionsList"
    @select-option="(category, option) => emit('selectOption', category, option)"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppSelectModal from './AppSelectModal.vue'
import { AppInput, AppButton } from '@/components/elements'
import { IconMenu } from '@/components/icons'
import { type ISchema } from '@/stores/schemas/schema'
import { getOptions } from '@/stores/forms/form.options'
import { useStore } from '@/stores'

const props = defineProps<{
  title?: string
  placeholder?: string
  disabled?: any
  modal: ISchema
  options: {
    substore: keyof ReturnType<typeof useStore>,
    listKey: string
  }
  value?: string
}>()

const modalVisibility = ref<boolean>(false)

const emit = defineEmits<{
  change: [value: string]
  selectOption: [category: string, option: string]
}>()

function change(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('change', target.value)
}

const optionsList = ref<ISchema[]>([])

const store = useStore()

function setOptions() {
  const options = getOptions(store, props.options.substore, props.options.listKey) || []
  optionsList.value = options
  console.log('[getSelectOptions]: ', options)
  modalVisibility.value = true
  return options
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
