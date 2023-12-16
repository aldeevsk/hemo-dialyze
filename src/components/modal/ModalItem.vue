<template>
    <div class="modal__item">
        <div class="modal__item-name">
            <slot></slot>
            <IconDelete @click="emit('deleteItem')" />
        </div>
        <VButton @click="emit('checkItem')">
            <IconAngleRight />
        </VButton>
    </div>
</template>

<script setup lang="ts">
import { IconDelete, IconAngleRight } from '../icons'
import { VButton } from '../ui'

const emit = defineEmits<{
    deleteItem: []
    checkItem: []
}>()
</script>

<style scoped>
.modal__item {
    width: 100%;
    height: 3rem;
    display: flex;
    gap: 1px;
}
.modal__item-name {
    height: 100%;
    padding: 0 10px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(var(--dark), 0.8);
}
.modal__item .icon-delete:hover {
    fill: rgba(var(--accent), 0.8);
}
.modal__item .icon-delete:active {
    fill: rgba(var(--accent), 0.5);
}
.modal__item.active .button {
    border-color: rgba(var(--accent), 1);
    stroke: rgb(var(--light));
}
</style>
