<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolTip',
  props: {
    display: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="tooltip">
    <span class="tooltip--display">{{ display }}</span>
    <p class="tooltip--content">
      <slot></slot>
    </p>
  </div>
</template>

<style scoped lang="scss">
@use '../../../assets/css/book';

.tooltip {
  position: relative;
  display: inline-block;

  &--display {
    position: relative;
    transition: opacity 200ms ease;

    &::after {
      left: 0;
      bottom: 0;
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      background-color: currentColor;
    }
  }

  &--content {
    top: 0;
    left: 50%;
    opacity: 0;
    max-width: 20em;
    user-select: none;
    padding: .4em .8em;
    width: max-content;
    position: absolute;
    border-radius: .4em;
    pointer-events: none;
    transform: translate(-50%, -75%);
    // Transition
    transition-duration: 350ms;
    transition-timing-function: ease;
    transition-property: opacity, transform;
    // Style
    color: book.$white-bright;
    background-color: book.$primary-lighter;
  }

  &:hover {
    .tooltip{
      &--display {
        opacity: .4;
      }

      &--content {
        opacity: 1;
        transform: translate(-50%, -105%);
      }
    }
  }
}
</style>
