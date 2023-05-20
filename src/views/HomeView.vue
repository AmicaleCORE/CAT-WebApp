<script>
import { defineComponent } from 'vue'
import ToolTip from '@/components/misc/infos/ToolTip.vue'
import CallToAction from '@/components/misc/buttons/CallToAction.vue'

export default defineComponent({
  name: 'HomeView',
  components: { CallToAction, ToolTip },
  methods: {
    scrollTo (element) {
      this.$refs[element]?.scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>

<template>
  <section class="section hero">
    <div class="section--wrapper hero__texts">
      <h1 class="section--title hero__texts--title">CAT, c'est quoi ?</h1>
      <p class="section--description hero__texts--subtitle">
        CAT c'est un rassemblement de compétiteurs mêlant à la fois challenge, réflexion et rapidité tout en passant un moment motivant, conviviale et plaisant autour d'une passion commune : la <span class="bold">programmation</span>.
        <br /><br />
        Des <ToolTip display="récompenses">Lots divers et variés.</ToolTip> seront mises en jeu par l'Amicale CORE et pourront être remportées à l'issue de certains tournois.
      </p>
      <CallToAction @click.prevent="scrollTo('next')">Découvrir</CallToAction>
    </div>

    <span class="hero--thumbnail" v-html="require('../../public/assets/images/illustrations/hacker_mind.js')"></span>
  </section>

  <section class="section next" ref="next">
    <!-- TODO -->
  </section>
</template>

<style scoped lang="scss">
@use '../assets/css/book';

.section {
  width: 100%;
  padding: 1em 4em;
  min-height: 100vh;

  &--title {
    font-size: 3em;
    font-weight: 900;
    text-transform: uppercase;
  }

  &--description {
    line-height: 1.5em;
  }
}

.hero {
  gap: 4em;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);

  &__texts {
    gap: 1.5em;
    display: flex;
    flex-direction: column;
  }

  &--thumbnail {
    width: 100%;
    display: inline-block;
    color: book.$background-darker;
  }
}

.next {

}
</style>
