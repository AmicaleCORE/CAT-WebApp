<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CallToAction',
  props: {
    link: Boolean,
    large: Boolean,
    to: String
  }
})
</script>

<template>
  <RouterLink v-if="link && to" :to="to" class="cta" :class="{ large }"><slot></slot></RouterLink>
  <button v-else class="cta" :class="{ large }"><slot></slot></button>
</template>

<style scoped lang="scss">
@use '../../../assets/css/book';

.cta {
  display: flex;
  padding: .75em 2em;
  width: max-content;
  align-items: center;
  border-radius: .75em;
  justify-content: center;
  // Style
  color: book.$white-bright;
  background-color: book.$primary;
  // Transition
  transition-duration: 350ms;
  transition-property: background-color;

  &.large {
    width: inherit;
  }

  &:hover {
    background-color: book.$primary-darker;
  }
}
</style>
