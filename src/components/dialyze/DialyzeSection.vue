<template>
    <VSection title="Назначения сеанса гемодиализа">
        <VGroup title="Программа сеанса">
            <VButton
                v-for="prog in programs"
                :key="prog.id"
                :class="{ active: program?.slug === prog.slug }"
                @click="setProgram(prog.slug)"
            >
                {{ prog.label }}
            </VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Диализаторы" :value="form.dialyzer" readonly>Диализатор</TextInput>
            <VButton @click="setupModal('dialyzer')"><IconMenu /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Концентраторы" readonly>Концентратор</TextInput>
            <VButton @click="setupModal('concentrator')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="10 л" readonly> Объем л. </TextInput>
        </VGroup>
        <VGroup title="Тип инъекции">
            <VButton
                v-for="injector in injectors"
                :key="injector.id"
                :class="{ active: injector.slug === injectType?.slug }"
                @click="setInjectType(injector.slug)"
            >
                {{ injector.label }}
            </VButton>
        </VGroup>
        <VGroup :class="{ disabled: injectType?.slug != 'needle' }">
            <TextInput placeholder="Спр. Иглы" readonly />
            <VButton @click="setupModal('needle')" :disabled="injectType?.slug != 'needle'"
                ><IconMenu
            /></VButton>
            <TextInput placeholder="Спр. Тип иглы" readonly />
            <VButton @click="setupModal('needleType')" :disabled="injectType?.slug != 'needle'"
                ><IconMenu
            /></VButton>
        </VGroup>
        <VGroup :class="{ disabled: injectType?.slug != 'catheter' }">
            <TextInput placeholder="Спр. Катетеры" :value="''" readonly />
            <VButton @click="setupModal('catheter')" :disabled="injectType?.slug != 'catheter'"
                ><IconMenu
            /></VButton>
            <TextInput placeholder="Спр. Тип катетера" readonly />
            <VButton @click="setupModal('catheterType')" :disabled="injectType?.slug != 'catheter'"
                ><IconMenu
            /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="ХХХ гр / л">Бикарбонат</TextInput>
            <VButton @click="setupModal('bicarbonate')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="ХХХ кг">Сухой вес пациента</TextInput>
            <TextInput placeholder="Наименование">Антикоагуляция</TextInput>
            <VButton @click="setupModal('anticoagulant')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="ХХХ ед">Объем</TextInput>
        </VGroup>
        <VGroup>
            <VButton>Сформировать сеанс</VButton>
        </VGroup>
        <VGroup>
            <DialyzeBoard
                program=""
                dialyzer=""
                concentrator=""
                inject-type=""
                bicarbonate=""
                anticoagulant=""
                weight=""
            />
        </VGroup>
        <Modal
            @close="modal.isVisible = false"
            :category="modal.category"
            :items="modal.items"
            :isVisible="modal.isVisible"
            @change="(cat, item) => console.log(cat, item)"
        />
    </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VButton, TextInput } from '@/components/ui'
import { IconMenu } from '@/components/icons'
import { VSection, VGroup } from '@/components'
import { Modal, type IModalProps } from '@/components/modal'
import DialyzeBoard from './DialyzeBoard.vue'
import { useCategoriesStore } from '@/stores'
import { useProductsStore } from '@/stores'
import { EGroups, type ICategory } from '@/stores/types/medical'
import type { IDialyze } from '@/stores/types/appointment'
import { dialyzeForm } from '@/stores/forms/appointment.forms'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const programs = ref<ICategory[] | null>(categoriesStore.filterBy({group: EGroups.PROGRAM}) || null)

const program = ref<ICategory | null>()
program.value = programs.value ? programs.value[0] : null

function setProgram(slug: string): void {
    const prog = programs.value?.find(p => p.slug === slug)
    if(!prog) return
    program.value = prog
    setFormProp('program', prog.label)
}

// function getCategory(slug: string): ICategory | null {
//     return categoriesStore.findOne({slug}) || null
// }

const injectors = ref<ICategory[] | null>(categoriesStore.filterBy({group: EGroups.INJECTOR}) || null)
const injectType = ref<ICategory | null>()
injectType.value = injectors.value ? injectors.value[0] : null

function setInjectType(slug: string): void {
    const injectorType = injectors.value?.find( i => i.slug === slug)
    if(!injectorType) return
    injectType.value = injectors.value?.find( i => i.slug === slug)
    setFormProp('injectType', injectorType.slug)
}

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

const form = ref<IDialyze>(dialyzeForm)

function setFormProp<K extends keyof IDialyze>(prop: K, value: IDialyze[K]): void {
    form.value[prop] = value
    console.log(form.value)
}
</script>

<style scoped></style>
