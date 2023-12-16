<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

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
.button:hover {
    border-color: rgb(var(--accent));
    color: rgb(var(--accent));
}
.button:active, .button.active {
    background: rgb(var(--accent));
    color: rgb(var(--light));
}
</style>