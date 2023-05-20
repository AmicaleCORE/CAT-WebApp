<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SmartInput',
  data: () => ({
    lValue: undefined,
    lType: undefined,
    valid: true
  }),
  props: {
    type: {
      type: String,
      defaultValue: 'text'
    },
    disabled: Boolean,
    name: {
      type: String,
      required: true
    },
    value: String,
    optional: Boolean
  },
  created () {
    this.lType = this.type === 'password' ? this.type : 'text'
    if (this.value) {
      this.lValue = this.value
      this.valid = this.validate()
    }
  },
  methods: {
    validate () {
      const passwdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#/¡\\.])[A-Za-z\d@$!%*?&]{8,}$/g.test(this.lValue)
      const emailTest = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.lValue)

      switch (this.type) {
        case 'password':
          return passwdTest
        case 'email':
          return emailTest || ((this.optional && emailTest) || !this.lValue)
        default:
          return true
      }
    }
  }
})
</script>

<template>
  <div class="input" :class="{ invalid: !valid }">
    <input :type="lType" class="input--field" @input="valid = validate()" @blur="valid = validate()" :name="name" :id="name" v-model="lValue" required />
    <label :for="name" class="input--label">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped lang="scss">
@use '../../assets/css/book';

.input {
  $t-offset: .75em;
  $l-offset: 1.5em;

  width: 100%;
  position: relative;

  &--label {
    // Text style
    opacity: .3;
    font-weight: 500;
    line-height: 1em;
    // Interactions
    user-select: none;
    pointer-events: none;
    // Position
    top: 50%;
    left: $l-offset;
    position: absolute;
    transform-origin: left;
    transform: translateY(-50%);
    // Transition
    transition-duration: 150ms;
    transition-timing-function: ease-out;
    transition-property: top, opacity, transform;
  }

  &--field {
    width: 100%;
    line-height: 1em;
    padding: $t-offset $l-offset;
    //box-shadow: inset 0 0 0 1px black; // TODO: Remove

    &:focus, &:valid {
      + .input--label {
        top: 0;
        opacity: 1;
        transform: translateY(-50%) scale(.8);
      }
    }
  }

  &.invalid {
    color: red;
  }

  &:hover {
    .input--label {
      opacity: 1;
    }
  }
}
</style>
