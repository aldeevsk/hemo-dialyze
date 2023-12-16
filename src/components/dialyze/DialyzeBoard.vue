<template>
    <div class="board">
        <h3 class="board__title">Назначения сеанса гемодиализа</h3>
        <div class="board__body">
            <div class="board__item"><IconMonitor />Программа {{ props.program }}</div>
            <div class="board__item"><IconDialyzer />Диализатор {{ props.dialyzer }}</div>
            <div class="board__item">
                <IconConcentrator />Концентратор Объём {{ props.concentrator }}
            </div>
            <div class="board__item"><IconInject />Игла/Катетер {{ props.injectType }}</div>
            <div class="board__item"><IconLab />Бикарбонат мл {{ props.bicarbonate }}</div>
            <div class="board__item"><IconLab />Антикоагуляция ед. {{ props.anticoagulant }}</div>
            <div class="board__item"><IconWeight />Сухой вес кг {{ props.weight }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    IconMonitor,
    IconDialyzer,
    IconInject,
    IconLab,
    IconWeight,
    IconConcentrator
} from '../icons'

const props = defineProps<{
    program: string
    dialyzer: string
    concentrator: string
    injectType: string
    bicarbonate: string
    anticoagulant: string
    weight: string
}>()
</script>

<style scoped>
.board {
    width: 100%;
    display: grid;
    gap: var(--gap);
    padding: var(--gap);
    border: var(--border);
}
.board__body {
    width: 100%;
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.board__item {
    min-width: 30%;
    display: flex;
    gap: var(--gap);
    align-items: center;
}
</style>
