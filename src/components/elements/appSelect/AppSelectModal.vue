<template>
    <div class="select-modal">
        <div class="select-modal__content">
            <div class="select-modal__header">
                <h3 class="select-modal__title">{{ props.category.label }}</h3>
                <AppButton @click="emit('clickOnClose')">Закрыть</AppButton>
            </div>
            <div class="select-modal__body">
                <div class="select-modal__option"
                    v-for="option in props.options"
                    :key="option.id"
                    @click="emit('selectOption', category.slug, option.slug)"
                >
                    {{ option.label }}
            </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppButton } from '..'
import type { ISchema } from '@/stores/schemas/schema'

const props = defineProps<{
    category: ISchema
    options: ISchema[]
}>()

const emit = defineEmits<{
    clickOnClose: [],
    selectOption: [category: ISchema['slug'], option: ISchema['slug']]
}>()
</script>

<style scoped>
.select-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(var(--dark), 0.3);
}
.select-modal__content {
    width: min(50rem, calc(100vw - 50px));
    background: rgb(var(--light));
    padding: var(--gap-sm);
}
.select-modal__header {
    display: grid;
    gap: var(--gap-sm);
}
.select-modal .button {
    justify-self: start;
}
</style>