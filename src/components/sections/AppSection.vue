<template>
    <section class="section">
        <div class="container">
            <h2 v-if="props.title" class="section__title">{{ props.title }}</h2>
            <div class="section__body">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>

<style scoped>
.section {
    padding: var(--gap-md) 0;
}
.section__title {
    font-weight: normal;
}
</style>