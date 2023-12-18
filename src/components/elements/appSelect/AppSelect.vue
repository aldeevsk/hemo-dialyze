<template>
    <div class="select">
        <strong v-if="props.title" class="select__title">{{ props.title }}</strong>
        <div class="select__body">
            <AppInput :placeholder="props.placeholder" @change="change" :disabled="props.disabled"/>
            <AppButton :disabled="props.disabled" @click="modal = true">
                <IconMenu/>
            </AppButton>
        </div>
    </div>
    <AppSelectModal v-if="modal" @click-on-close="modal = false" :category="{id: 1, slug: 'dialyzer', label: 'Диализаторы'}" :options="[]"/>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppSelectModal from './AppSelectModal.vue'
import { AppInput, AppButton } from '@/components/elements'
import { IconMenu } from '@/components/icons'

const props = defineProps<{
    title?: string
    placeholder?: string
    disabled?: any
}>()

const modal = ref<boolean>(false)

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
.button:active:not(:disabled)>.icon {
    fill: rgb(var(--light));
}
</style>