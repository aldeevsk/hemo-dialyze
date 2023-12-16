<template>
    <input
        class="input"
        :type="props.type || 'text'"
        :placeholder="props.placeholder"
        :value="props.value"
        :min="props.min"
        :max="props.max"
        :required="props.required"
    >
</template>

<script setup lang="ts">
const props = defineProps<{
    type?: string
    placeholder?: string
    value?: string
    min?: string
    max?: string
    required?: any
}>()
</script>

<style scoped>
.input {
    height: var(--el-h);
    padding: 0 var(--gap-sm);
    border: var(--border);
    outline: none;
}
.input:focus {
    border-color: rgb(var(--accent));
    color: rgb(var(--accent));
}
.input:focus::placeholder {
    color: rgb(var(--accent));
}
.input.error {
    border-color: rgb(var(--danger));
    color: rgb(var(--danger));
}
.input.error::placeholder {
    color: rgb(var(--danger));
}
</style>