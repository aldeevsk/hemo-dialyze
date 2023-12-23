<template>
  <div class="input" :style="{ width: props.width }">
    <span class="input__title" v-if="props.title">{{ props.title }}</span>
    <input
      class="input__element"
      :type="props.type || 'text'"
      :placeholder="props.placeholder"
      :value="props.value"
      :min="props.min"
      :max="props.max"
      :required="props.required"
      :readonly="props.readonly"
      :disabled="props.disabled"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  type?: string
  placeholder?: string
  value?: string
  min?: string
  max?: string
  required?: any
  readonly?: any
  width?: string
  disabled?: any
}>()
</script>

<style scoped>
.input {
  display: grid;
  gap: var(--gap-xs);
}
.input__title {
  font-size: var(--font-sm);
  font-weight: bold;
}
.input__element {
  width: 100%;
  height: var(--el-h);
  padding: 0 var(--gap-sm);
  border: var(--border);
  outline: none;
  justify-self: start;
}
.input:focus {
  border-color: rgb(var(--accent));
  color: rgb(var(--accent));
}
.input:focus::placeholder {
  color: rgb(var(--accent));
}
.input.error {
  border-color: rgb(var(--danger));
  color: rgb(var(--danger));
}
.input.error::placeholder {
  color: rgb(var(--danger));
}
.input__element:disabled {
  opacity: 0.3;
}
</style>
