<template>
  <div class="search">
    <AppInput
      class="search__input"
      placeholder="Поиск позиции по первым символам"
    />
    <AppButton class="search__button"><IconLoupe/></AppButton>
  </div>
</template>

<script setup lang="ts">
import { AppInput, AppButton } from '.'
import { IconLoupe } from '../icons';

</script>
<style scoped>
.search {
  height: var(--el-h);
  width: 100%;
  display: flex;
  gap: var(--gap-sm);
}
.search__input {
  flex-grow: 1;
  height: 100%;
}
.search__button {
  border-radius: 0;
  width: 5rem;
  stroke: rgb(var(--dark));
  padding: 0;
}
</style>
