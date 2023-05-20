<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  mounted () {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', this.$store.state.theme)
    this.$store.state.theme = localStorage.getItem('theme')

    this.switchTheme(this.$store.state.theme)
  },
  methods: {
    switchTheme (theme) {
      if (theme !== 'light' && theme !== 'dark') return

      localStorage.setItem('theme', theme)
      this.$store.state.theme = theme

      if (this.$store.state.theme === 'light') document.querySelector('#app').classList.add('light')
      else document.querySelector('#app').classList.remove('light')
    },
    toggleTheme () {
      this.switchTheme(this.$store.state.theme === 'light' ? 'dark' : 'light')
    }
  }
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@use 'assets/css/book';
@use 'assets/css/mixins';
@forward 'assets/css/reset';

body {
  font-family: book.$body-font-family;
}

#app {
  // THEMES
  // Default: Dark
  --background: #{book.$black-darker};
  --background-darker: #{book.$black-dark};
  --background-dark: #{book.$black-light};
  --background-black: #{book.$black-bright};

  --text: #{book.$white-bright};
  --text-darker: #{book.$white-light};
  --text-dark: #{book.$white-dark};
  --text-black: #{book.$white-darker};

  // Alternative: Light
  &.light {
    --background: #{book.$white-bright};
    --background-darker: #{book.$white-light};
    --background-dark: #{book.$white-dark};
    --background-black: #{book.$white-darker};

    --text: #{book.$black-darker};
    --text-darker: #{book.$black-dark};
    --text-dark: #{book.$black-light};
    --text-black: #{book.$black-bright};
  }

  width: 100%;
  min-height: 100vh;
  color: book.$text;
  background-color: book.$background;
}
</style>
