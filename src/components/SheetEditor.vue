<template>
  <form class="sheet-editor" @input="$emit('input')">
    <div class="row pure-g">
      <div class="pure-u-1 pure-u-xl-3-4">
        <details-section :character="character" @input="$emit('input')"/>
        <stats-section :character="character" @input="$emit('input')"/>
        <abilities-section :character="character" @input="$emit('input')"/>
      </div>
    </div>
  </form>
</template>

<script>
import DetailsSection from '@/components/sections/Details.vue'
import StatsSection from '@/components/sections/Stats.vue'
import AbilitiesSection from '@/components/sections/Abilities.vue'

export default {
  props: ['character'],
  components: { DetailsSection, StatsSection, AbilitiesSection },
}
</script>

<style lang="scss">
.sheet-editor {

  .row {
    justify-content: center;
  }

  .section {
    border: none;
    margin: 1rem;

    &:first-child {
      margin-top: 0;
    }

    .field + .field {
      padding-left: 5px;
    }

    & + .section {
      border-top: 3px dotted $primary;
      padding-top: 1.5rem;
    }
  }
}
</style>
