<template>
  <div class="select-modal">
    <div class="select-modal__content">
      <div class="select-modal__header">
        <h3 class="select-modal__title">{{ props.title }}</h3>
        <AppButton @click="emit('clickOnClose')">Закрыть</AppButton>
      </div>
      <div class="select-modal__body" v-if="props.options.length">
        <div class="select-modal__option" v-for="option in props.options" :key="option.id">
          <span class="select-modal__optionlabel">{{ option.label }}</span>
          <AppButton class="select-modal__option-button" @click="emit('removeOption', option.id)"><IconDelete /></AppButton>
          <AppButton
            class="select-modal__option-button"
            :class="{ active: selectedOption === option.slug }"
            @click="selectOption(option)"
          >
            <IconAngleRight />
          </AppButton>
        </div>
      </div>
      <div class="select-modal__body" v-else>
        <strong class="select-modal__option">Этот раздел пуст</strong>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppButton } from '..'
import type { TUnionSchema } from '@/stores/schemas'
import { IconDelete, IconAngleRight } from '@/components/icons'

const props = defineProps<{
  title: string
  options: ISchema[]
}>()

const emit = defineEmits<{
  clickOnClose: []
  selectOption: [option: TUnionSchema]
  removeOption: [id: number]
}>()

const selectedOption = ref<string>()

function selectOption(option: TUnionSchema) {
  selectedOption.value = option.slug
  emit('selectOption', option)
}
</script>

<style scoped>
.select-modal {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(var(--dark), 0.3);
}
.select-modal__content {
  width: min(50rem, calc(100vw - 50px));
  display: grid;
  gap: var(--gap-sm);
  background: rgb(var(--light));
  padding: var(--gap-sm);
}
.select-modal__header {
  display: grid;
  gap: var(--gap-sm);
}
.select-modal__header .button {
  justify-self: start;
}

.select-modal__body {
  border: var(--border);
}
.select-modal__option {
  height: var(--el-h);
  display: flex;
  align-items: center;
  padding-left: var(--gap-sm);
}
.select-modal__option:not(:last-child) {
  border-bottom: var(--border);
}
.select-modal__optionlabel {
  flex-grow: 1;
  text-wrap: nowrap;
  text-overflow: clip;
}
.select-modal__option-button,
.select-modal__option-button:hover,
.select-modal__option-button:active {
  border: none;
  border-color: var(--dark);
  border-radius: 0;
  padding: 0 var(--gap-sm);
}
.select-modal__option-button:last-child {
  border-left: var(--border);
}
.select-modal__option-button:hover .icon-angle-right {
  stroke: rgb(var(--accent));
}
.select-modal__option-button:hover .icon-delete {
  fill: rgb(var(--accent));
}
.select-modal__option-button:active .icon-angle-right {
  stroke: rgb(var(--light));
}
.select-modal__option-button:active .icon-delete {
  fill: rgb(var(--light));
}
.select-modal__option-button.active {
  background: rgb(var(--accent));
}
.select-modal__option-button.active .icon-angle-right {
  stroke: rgb(var(--light));
}
</style>
