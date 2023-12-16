<template>
    <div class="recipe">
        <span class="recipe__title">Лечение на дому</span>
        <div class="recipe__body">
            <div class="recipe__item">
                <span class="recipe__cell">medication</span>
                <span class="recipe__cell">takingMethod</span>
                <span class="recipe__cell">dosage</span>
                <span class="recipe__cell">tymesInDay</span>
                <span class="recipe__cell">dateRange</span>
                <span class="recipe__cell">daysCount</span>
            </div>
            <div class="recipe__item">
                <span class="recipe__cell">medication</span>
                <span class="recipe__cell">takingMethod</span>
                <span class="recipe__cell">dosage</span>
                <span class="recipe__cell">tymesInDay</span>
                <span class="recipe__cell">dateRange</span>
                <span class="recipe__cell">daysCount</span>
            </div>
            <div class="recipe__item">
                <span class="recipe__cell">medication</span>
                <span class="recipe__cell">takingMethod</span>
                <span class="recipe__cell">dosage</span>
                <span class="recipe__cell">tymesInDay</span>
                <span class="recipe__cell">dateRange</span>
                <span class="recipe__cell">daysCount</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.recipe {
    width: 100%;
    display: grid;
    gap: calc(var(--gap));
}
.recipe__body {
    width: 100%;
    border: var(--border);
    padding: var(--gap);
    display: grid;
    gap: var(--gap);
}
.recipe__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: var(--gap);
}
.recipe__item:not(:last-child) {
    padding-bottom: var(--gap);
    border-bottom: var(--border);
}
</style>
