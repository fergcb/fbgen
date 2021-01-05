<template>
  <fieldset class="section details-section">
    <div class="pure-g row">
      <text-input class="pure-u-10-24" label="Character Name" v-model="character.name"/>
      <class-control class="pure-u-10-24" label="Class" v-model="character.classes" @input="$emit('input')"/>
      <text-input class="pure-u-4-24" label="XP" v-model="character.xp"/>
    </div>
    <div class="pure-g row">
      <text-input class="pure-u-6-24" label="Player" v-model="character.player"/>
      <text-input class="pure-u-8-24" label="Race" v-model="character.race"/>
      <text-input class="pure-u-5-24" label="Background" v-model="character.background"/>
      <text-input class="pure-u-5-24" label="Alignment" v-model="character.alignment"/>
    </div>
  </fieldset>
</template>

<script>
import TextInput from '@/components/controls/TextInput'
import ClassControl from '@/components/controls/ClassControl'

export default {
  name: 'DetailsSection',
  props: ['character'],
  components: { TextInput, ClassControl },
}
</script>

<style lang="scss" scoped>
.details-section {
  .row + .row {
    margin-top: 1rem;
  }
}
</style>
