<template>
    <VSection title="Лечение на дому">
        <VGroup>
            <TextInput placeholder="Спр. Препараты" readonly>Лекарственный препарат</TextInput>
            <VButton @click="setupModal('medication')"><IconMenu /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Путь приема" readonly>Путь приема</TextInput>
            <VButton @click="setupModal('Путь приема')"><IconMenu /></VButton>
            <TextInput placeholder="Спр. Дозы препаратов" readonly>Дозировка</TextInput>
            <VButton @click="setupModal('Дозы препаратов')"><IconMenu /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Кр-ть приема">Кратность приема</TextInput>
            <VButton @click="setupModal('Кратность приема')"><IconMenu /></VButton>
            <DateInput title="Начало приема" />
            <DateInput title="Конец приема" />
        </VGroup>
        <VGroup class="content-right">
            <span>Количество дней: ХХ</span>
        </VGroup>
        <VGroup>
            <VButton class="justify-end">Добавить</VButton>
        </VGroup>
        <VGroup>
            <HomeTreatmentRecipe />
        </VGroup>
        <VGroup>
            <HomeTreatmentRecommends />
        </VGroup>
        <Modal
            @close="modal.isVisible = false"
            :category="modal.category"
            :items="modal.items"
            :isVisible="modal.isVisible"
        />
    </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu } from '@/components/icons'
import { VButton, TextInput, DateInput } from '@/components/ui'
import { VSection, VGroup } from '@/components/'
import { Modal, type IModalProps } from '@/components/modal'
import HomeTreatmentRecipe from './HomeTreatmentRecipe.vue'
import HomeTreatmentRecommends from './HomeTreatmentRecommends.vue'
import { useCategoriesStore } from '@/stores'
import { useProductsStore } from '@/stores'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const modal = ref<IModalProps>({
    isVisible: false,
    category: null,
    items: []
})

function setupModal(categorySlug: string): void {
    const category = categoriesStore.findOne({ slug: categorySlug })
    const products = productsStore.filterBy({ categorySlug })
    console.log(products)
    if (!category || !products) return
    modal.value = {
        category: category,
        items: products,
        isVisible: true
    }
}
</script>

<style scoped></style>
