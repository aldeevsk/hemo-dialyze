<template>
    <div class="recommends">
        <h3 class="recommends__title">Рекомендации</h3>
        <div class="recommends__body">
            <VAddRecord />
            <div class="recommends__list">
                <div v-if="!props.recommends" class="recommends__item">Список рекомендаций...</div>
                <div
                    class="recommends__item"
                    v-for="(recommend, index) in props.recommends"
                    :key="index"
                >
                    {{ recommend }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VAddRecord } from '../ui'

const props = defineProps<{
    recommends?: string[]
}>()
</script>

<style scoped>
.recommends {
    width: 100%;
    display: grid;
    gap: var(--gap);
}
.recommends__title {
    font-weight: normal;
}
.recommends__body {
    width: 100%;
    display: grid;
    gap: var(--gap);
}
.recommends__list {
    display: flex;
    padding: var(--gap);
    flex-direction: column;
    border: var(--border);
}
</style>
