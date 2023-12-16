<template>
    <div class="modal" v-if="props.category && props.isVisible">
        <div class="modal__content">
            <div class="modal__header">
                <span class="modal__title">{{ props.category.label }}</span>
                <VButton class="modal__close-button" @click="emit('close')">Закрыть</VButton>
                <VSearch placeholder="Поиск позиции по первым символам" />
                <VAddRecord />
            </div>
            <div class="modal__body">
                <ModalItem
                    v-for="item in props.items"
                    :key="item.id"
                    :class="{ 'active': checked === item.slug }"
                    @check-item="change(props.category.slug, item.slug)"
                >
                    {{ item.label }}
                </ModalItem>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModalItem from './ModalItem.vue'
import { VSearch, VButton, VAddRecord } from '../ui'
import type { IEntity } from '@/stores/types/models'

export interface IModalProps {
    category: IEntity | null
    items: IEntity[]
    isVisible: boolean
}

const props = defineProps<{
    category: IModalProps['category']
    items: IModalProps['items']
    isVisible: IModalProps['isVisible']
}>()

const emit = defineEmits<{
    close: []
    change: [categorySlug: string, selectedSlug: string]
}>()

const checked = ref<string>('')

function change(categorySlug: string, itemSlug: string) {
    checked.value = itemSlug
    emit('change', categorySlug, itemSlug)
}
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(var(--dark), 0.4);
}
.modal__content {
    width: min(500px, calc(100vw - 50px));
    background: rgb(var(--light));
    padding: 10px;
}
.modal__header {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
}
.modal__title {
    font-weight: bold;
}
.modal__close-button {
    align-self: flex-start;
}
.modal__body {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: var(--gap-sm);
}
</style>
