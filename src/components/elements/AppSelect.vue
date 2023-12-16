<template>
    <div class="select">
        <strong v-if="props.title" class="select__title">{{ props.title }}</strong>
        <div class="select__body">
            <AppInput :placeholder="props.placeholder" @change="change"/>
            <AppButton>
                <IconMenu/>
            </AppButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppInput, AppButton } from '.'
import { IconMenu } from '../icons'

const props = defineProps<{
    title?: string
    placeholder?: string
}>()

const emit = defineEmits<{
    change: [value: string]
}>()

function change(event: Event): void {
    const target = event.target as HTMLInputElement
    emit('change', target.value)
}
</script>

<style scoped>
.select {
    display: grid;
    align-items: center;
    gap: var(--gap-xs);
}
.select__body {
    display: flex;
    align-items: center;
    gap: var(--gap-xs);
}
.button:active>.icon {
    fill: rgb(var(--light));
}
</style>