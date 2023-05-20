<script>
import { defineComponent } from 'vue'
import HeaderInfo from '@/components/misc/infos/HeaderInfo.vue'
import { parseTimeGap, timeParse } from '@/assets/js/Timers'

export default defineComponent({
  name: 'ApplicationLayout',
  components: { HeaderInfo },
  data: () => ({
    applyEndDate: new Date('May 22, 2023 12:00:00'),
    applyCountdown: undefined,
    startDate: new Date('May 24, 2023 12:00:00'),
    startCountdown: undefined
  }),
  created () {
    setInterval(() => {
      const applyCountdown = parseTimeGap(new Date(), this.applyEndDate)
      if (applyCountdown) {
        this.applyCountdown = timeParse(applyCountdown, {
          days: true,
          hours: true,
          minutes: true,
          seconds: true
        })
      }

      const startCountdown = parseTimeGap(new Date(), this.startDate)
      if (startCountdown) {
        this.startCountdown = timeParse(startCountdown, {
          days: true,
          hours: true,
          minutes: true,
          seconds: true
        })
      }
    }, 100)
  }
})
</script>

<template>
  <header class="header">
    <HeaderInfo v-if="applyCountdown">Fin des inscriptions dans : <span class="bold">{{ applyCountdown }}</span></HeaderInfo>
    <HeaderInfo v-else-if="startCountdown">Début du tournoi dans : <span class="bold">{{ startCountdown }}</span></HeaderInfo>

    <div class="header--wrapper">
      <section class="header__brand">
        <!--<img src="/assets/images/logos/logo.png" alt="" class="header__brand--logo" />-->
        <p class="header__brand__name" data-shorten-way="CAT">
          <span class="header__brand__name--content">
            <span class="header__brand__name--grow">Code Arena</span>Tournament
          </span>
        </p>
      </section>

      <nav class="header__menu">
        <RouterLink to="/" exact-active-class="active" class="header__menu--link">.home()</RouterLink>
        <RouterLink to="/1" active-class="active" class="header__menu--link">.tournament()</RouterLink>
        <RouterLink to="/2" active-class="active" class="header__menu--link">.about()</RouterLink>
        <RouterLink to="/3" active-class="active" class="header__menu--link" v-if="false /* logged in */">.panel()</RouterLink>
        <RouterLink to="/4" active-class="active" class="header__menu--link" v-else>.login()</RouterLink>
      </nav>
    </div>
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style lang="scss">
@use '../assets/css/book';
@use '../assets/css/mixins';

.bold {
  font-weight: 700;
}

.header {
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 9998;
  position: fixed;
  flex-direction: column;

  &--wrapper {
    width: 100%;
    display: flex;
    padding: 1em 4em;
    align-items: center;
    justify-content: space-between;
    // Style
    background-color: book.$background;
  }

  &__brand {
    gap: 1em;
    display: flex;
    align-items: center;

    &--logo {
      height: 2.5em;
    }

    &__name {
      gap: .2ch;
      display: flex;
      font-weight: 700;
      line-height: 1em;
      align-items: center;
      text-transform: uppercase;

      &::before {
        line-height: 1em;
        writing-mode: vertical-lr;
        content: attr(data-shorten-way);
        transform: rotate3d(0, 0, 1, 180deg);
      }

      &--content {
        display: flex;
        flex-direction: column;
      }

      &--grow {
        font-size: 1.1em;
        line-height: 1em;
      }
    }
  }

  &__menu {
    gap: 2em;
    display: flex;
    align-items: center;

    &--link {
      opacity: .4;
      display: flex;
      position: relative;
      align-items: center;
      // Transition
      transition-duration: 300ms;
      transition-property: opacity;
      transition-timing-function: ease;

      // Pseudo classes
      &:hover {
        opacity: 1;
      }

      // Active statement
      &.active {
        opacity: 1;
      }
    }
  }
}

.content {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;

  > section {
    scroll-snap-align: start;
  }
}
</style>
