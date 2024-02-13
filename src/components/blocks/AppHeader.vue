<template>
  <header class="header">
    <div class="container">
      <h2 class="header__title">{{ props.title }}</h2>
      <span class="header__num">№ месяце: {{ props.pageNumber }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    pageNumber: number
}>()
</script>

<style scoped>
.header {
  height: calc(var(--gap-lg) * 2);
}
.header .container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  align-items: center;
}
</style>