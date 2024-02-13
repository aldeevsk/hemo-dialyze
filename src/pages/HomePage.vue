<template>
  <AppHeader title="Сеанс гемодиализа" :pageNumber="4"/>
  <main>
    <DialyzeSection />
  </main>
</template>

<script setup lang="ts">
import { AppHeader } from '@/components/blocks'
import { DialyzeSection } from '@/components/sections'
</script>

<style scoped>
</style>
