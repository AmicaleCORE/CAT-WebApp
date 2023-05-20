<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderInfo'
})
</script>

<template>
  <div class="info">
    <p class="info--content">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '../../../assets/css/book';

.info {
  width: 100%;
  display: flex;
  padding: .75em 4em;
  align-items: center;
  justify-content: center;
  // Style
  color: book.$white-bright;
  background-color: book.$primary;

  * {
    user-select: none;
  }
}
</style>
