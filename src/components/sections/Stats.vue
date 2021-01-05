<template>
  <fieldset class="section stats-section">
    <div class="pure-g">
      <div class="pure-u-1-5 stat-block hp-block">
        <h3>Hit Points</h3>
        <div>
          <font-awesome-icon class="icon bg-icon" :icon="['fas', 'heart']" />
          <text-input class="big-input" v-model="character.stats.hitPoints.current" />
          <text-input class="temp-hp center" v-model="character.stats.hitPoints.temp" label="temp."/>
          <text-input class="max-hp center" v-model="character.stats.hitPoints.max" label="max."/>
        </div>
      </div>
      <div class="pure-u-1-5 stat-block dice-block">
        <h3>Hit Dice</h3>
        <div class="pure-g hit-dice">
          <text-input class="pure-u-1-2" v-model="character.stats.hitDice.total" label="Total" />
          <text-input class="pure-u-1-2" v-model="character.stats.hitDice.used" label="Used" />
        </div>
        <h3>Death Saves</h3>
        <tally-input class="save-marker" :value="character.stats.deathSaves.successes" :max="3" :icon="['fas', 'heartbeat']" @input="setSuccesses"/>
        <br />
        <tally-input class="save-marker" :value="character.stats.deathSaves.failures" :max="3" :icon="['fas', 'skull']" @input="setFailures"/>
      </div>
      <div class="pure-u-1-5 stat-block armor-block">
        <h3>Armor Class</h3>
        <font-awesome-icon class="icon bg-icon" :icon="['fas', 'shield-alt']" />
          <text-input class="big-input" v-model="character.stats.armorClass.base" />
          <text-input class="bonus-ac center" v-model="character.stats.armorClass.bonus" label="bonus"/>
      </div>
      <div class="pure-u-1-5 stat-block init-block">
        <h3>Initiative</h3>
        <font-awesome-icon class="icon bg-icon" :icon="['fas', 'brain']" />
          <text-input class="big-input" v-model="initiative" />
      </div>
      <div class="pure-u-1-5 stat-block speed-block">
        <h3>Speed</h3>
        <font-awesome-icon class="icon bg-icon" :icon="['fas', 'shoe-prints']" />
          <text-input class="big-input" v-model="character.stats.speed" />
      </div>
    </div>
  </fieldset>
</template>

<script>
import TextInput from '@/components/controls/TextInput'
import TallyInput from '@/components/controls/TallyInput.vue'

export default {
  name: 'StatsSection',
  props: ['character'],
  components: { TextInput, TallyInput },
  computed: {
    initiative () {
      return this.character.abilities.find(ability => ability.name === 'dex').modifier
    },
  },
  methods: {
    setSuccesses (event, value) {
      this.character.stats.deathSaves.successes = value
      this.$emit('input')
    },
    setFailures (event, value) {
      this.character.stats.deathSaves.failures = value
      this.$emit('input')
    },
  },
}
</script>

<style lang="scss">
.stats-section {

  padding-bottom: 0;

  @include lg {
    padding-bottom: 1rem;
  }

  .stat-block {
    text-align: center;
    position: relative;

    --font-scale: 1;
    --font-size: 100px;
    --font-border: 3px;

    @include lg {
      --font-size: 150px;
      --font-border: 4px;
    }

    h3 {
      font-family: 'Open Sans', sans-serif;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 22px;
    }

    .bg-icon {
      font-size: calc(var(--font-size) * var(--font-scale));
      color: $primary-tint;
    }

    .big-input {
      position: absolute;

      top: 28%;
      left: 15%;
      width: 70%;

      .text-input {
        font-family: 'Open Sans', sans-serif;
        font-size: calc(0.5 * var(--font-size) * var(--font-scale));
        font-weight: bold;
        text-align: center;
        border-bottom: none;

        color: white;
        -webkit-text-stroke: var(--font-border) black;

        &.empty {
          width: 75px;
          height: 75px;
          border-bottom: 4px solid black;
        }
      }
    }
  }

  .hp-block {
    .bg-icon {
      --font-scale: 1.05;
      margin-top: 0;
    }

    .max-hp,
    .temp-hp {
      position: absolute;
      top: calc(var(--font-size) * var(--font-scale) - 7%);
      width: 4rem;

      .text-input {
        font-weight: 600;
      }
    }

    .max-hp {
      right: 5%;
    }

    .temp-hp {
      left: 3%;
    }
  }

  .armor-block {
    .bonus-ac {
      position: absolute;
      top: calc(var(--font-size) * var(--font-scale) - 7%);
      right: 5%;
      width: 4rem;

      .text-input {
        font-weight: 600;
      }
    }
  }

  .speed-block {
    .bg-icon {
      --font-scale: 0.9;
      margin-top: calc(var(--font-size) * 0.15);
      transform: rotate(-90deg);
    }
  }

  .dice-block {
    h3 {
      font-size: 18px;

      @include lg {
        font-size: 22px;
      }
    }

    .hit-dice {
      width: 90%;
      margin-left: 5%;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;

      .text-input-label {
        font-size: 14px;

        @include lg {
          font-size: 16px;
        }
      }

      .text-input {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        width: 80%;
      }
    }

    .save-marker {
      button {

        font-size: 20px;
        padding: 4px;
        padding-bottom: 0;

        @include lg {
          font-size: 26px;
          padding: 5px;
        }
      }
    }
  }
}
</style>
