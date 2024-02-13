<template>
  <div class="add">
    <AppInput
      class="add__input"
      placeholder="Добавить новую запись"
    />
    <AppButton class="add__button"><IconPlus/></AppButton>
  </div>
</template>

<script setup lang="ts">
import { AppInput, AppButton } from '.'
import { IconPlus } from '../icons';

</script>
<style scoped>
.add {
  height: var(--el-h);
  width: 100%;
  display: flex;
  gap: var(--gap-sm);
}
.add__input {
  flex-grow: 1;
  height: 100%;
}
.add__button {
  border-radius: 0;
  width: 5rem;
  padding: 0;
}
.add__button:hover {
  stroke: rgb(var(--accent));
}
</style>
