<template>
    <button class="button" :disabled="props.disabled">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    disabled?: any
}>()
</script>

<style scoped>
.button {
    height: var(--el-h);
    padding: 0 var(--gap-md);
    background: transparent;
    border: var(--border);
    border-radius: var(--radius-sm);
    cursor: pointer;
}
.button:hover:not(:disabled) {
    border-color: rgb(var(--accent));
    color: rgb(var(--accent));
}
.button:active:not(:disabled), .button.active:not(:disabled) {
    background: rgb(var(--accent));
    color: rgb(var(--light));
    border-color: rgb(var(--accent));
}
.button:disabled {
    opacity: 0.3;
}
</style>