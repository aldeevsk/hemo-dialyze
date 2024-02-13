<template>
    <div class="board">
        <span class="board__title">Назначения сеанса гемодиализа</span>
        <div class="board__body">
            <span class="board__item"><IconMonitor/> {{ props.isReady && props.program || 'Программа'}}</span>
            <span class="board__item"><IconDialyzer/> {{ props.isReady && props.dialyler || 'Диализатор' }}</span>
            <span class="board__item"><IconConcentrator/> {{ props.isReady && props.concentrator ? props.concentrator + ' л' : 'Концентратор объем' }}</span>
            <span class="board__item"><IconInject/> {{ props.isReady && props.injectionType || 'Тип иньекции' }}</span>
            <span class="board__item"><IconLab/> {{ props.isReady && props.bicarbonate ? props.bicarbonate + ' мл' : 'Бикарбонат мл' }}</span>
            <span class="board__item"><IconLab/> {{ props.isReady && props.anticoagulant ? props.anticoagulant + ' ед' : 'Антикоагуляция ед.' }}</span>
            <span class="board__item"><IconWeight/> {{ props.isReady && props.weight ? props.weight + ' кг'  : 'Сухой вес' }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconMonitor, IconDialyzer, IconLab, IconConcentrator, IconWeight, IconInject } from '@/components/icons'

const props = defineProps<{
    program?: string
    dialyler?: string
    concentrator?: string
    injectionType?: string
    bicarbonate?: string
    anticoagulant?: string
    weight?: string
    isReady: boolean
}>()
</script>

<style scoped>
.board {
    display: grid;
    gap: var(--gap-sm);
    border: var(--border);
    padding: var(--gap-sm);
}
.board__title {
    font-size: var(--font-md);
}
.board__body {
    display: flex;
    flex-wrap: wrap;
    gap: var(--gap-sm);
}
.board__item {
    min-width: 8rem;
    display: flex;
    align-items: center;
    gap: var(--gap-sm);
}
</style>