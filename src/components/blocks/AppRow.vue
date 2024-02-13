<template>
  <div class="row">
    <h2 v-if="props.title" class="row__title">{{ props.title }}</h2>
    <div class="row__body" :style="props.stylesBody">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  stylesBody?: string
}>()
</script>

<style scoped>
.row {
  display: grid;
  gap: var(--gap-sm);
  padding: var(--gap-md) 0;
}
.row__title {
  font-weight: normal;
  font-size: var(--font-sm);
}
.row__body {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-sm);
  align-items: end;
}
</style>
