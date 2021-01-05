<template>
  <fieldset class="section abilities-section">
    <div class="section-header">
      <h2>Abilities &amp; Skills</h2>
      <div class="proficiency">
        <label for="proficiency-bonus">Proficiency Bonus:</label>
        <text-input id="proficiency-bonus" class="center" v-model="character.proficiencyBonus"/>
      </div>
    </div>
    <div class="pure-g" id="abilities">
      <div class="pure-u-1-2">
        <table class="abilities">
          <thead>
            <tr>
              <th>Ability</th>
              <th>P</th>
              <th>Base</th>
              <th>Bonus</th>
              <th>Score</th>
              <th>Modifier</th>
              <th>Save</th>
            </tr>
          </thead>
          <tbody @input="parseAbilities">
            <tr v-for="ability in character.abilities" :key="ability.name">
              <td> {{ ability.name }}. </td>
              <td>
                <toggle-input v-model="ability.proficient" class="center"/>
              </td>
              <td>
                <text-input v-model="ability.base" class="center"/>
              </td>
              <td>
                <text-input v-model="ability.bonus" class="center"/>
              </td>
              <td>
                <text-input :value="ability.score" readonly class="center"/>
              </td>
              <td>
                <text-input :value="ability.modifier" readonly class="center"/>
              </td>
              <td>
                <text-input :value="ability.save" readonly class="center"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pure-u-1-2" id="skills">
        <div class="pure-g">
          <div class="pure-u-1-2">
            <div class="skill" v-for="skill in character.skills.slice(0, 9)" :key="skill.name">
              <toggle-input class="small" v-model="skill.proficient"/>
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-ability">({{ skill.ability }}).</span>
              <text-input class="center" :id="skill.name + '-mod'" :value="skill.bonus"/>
            </div>
          </div>
          <div class="pure-u-1-2">
            <div class="skill" v-for="skill in character.skills.slice(9)" :key="skill.name">
              <toggle-input class="small" v-model="skill.proficient"/>
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-ability">({{ skill.ability }}).</span>
              <text-input class="center" :id="skill.name + '-mod'" :value="skill.bonus" readonly/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
import TextInput from '@/components/controls/TextInput'
import ToggleInput from '@/components/controls/ToggleInput'

export default {
  name: 'AbilitiesSection',
  props: ['character'],
  components: { TextInput, ToggleInput },
  methods: {
    parseAbilities () {
      const profBonus = parseInt(this.character.proficiencyBonus, 10)

      this.character.abilities = this.character.abilities.map(ability => {
        const baseInt = parseInt(ability.base, 10)
        const bonusInt = parseInt(ability.bonus, 10) * (ability.bonus.startsWith('-') ? -1 : 1)
        const score = baseInt + bonusInt
        const modifier = Math.floor((score - 10) / 2)
        const save = modifier + (ability.proficient ? profBonus : 0)
        return {
          name: ability.name,
          proficient: ability.proficient,
          base: ability.base,
          bonus: ability.bonus,
          score: score,
          modifier: modifier < 0 ? '' + modifier : '+' + modifier,
          save: save < 0 ? '' + save : '+' + save,
        }
      })

      this.character.skills = this.character.skills.map(skill => {
        const ability = this.character.abilities.find(ability => ability.name === skill.ability)
        const bonus = parseInt(ability.modifier, 10) + (skill.proficient ? profBonus : 0)
        return {
          name: skill.name,
          ability: skill.ability,
          proficient: skill.proficient,
          bonus: bonus < 0 ? '' + bonus : '+' + bonus,
        }
      })

      this.$emit('input')
    },
  },
  created () {
    this.parseAbilities()
  },
}
</script>

<style lang="scss">
.abilities-section {
  position: relative;

  .section-header {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;

    .proficiency {
      margin-left: auto;

      label {
        font-weight: 800;
        text-transform: uppercase;
      }

      #proficiency-bonus {
        display: inline-block;
        width: 3rem;
        margin-left: 1rem;
      }
    }
  }

  .abilities {
    width: 100%;

    th {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 1.2rem;
    }

    td {
      text-align: center;
      padding: 0 0.25rem;
      height: 2.6rem;

      .text-input {
        max-width: 4rem;
        font-size: 1.5rem;
        height: 2.2rem;
      }

      &:nth-child(1) {
        text-align: center;
        text-transform: uppercase;
        font-weight: 800;
        color: $primary;
      }

      &:nth-child(2) {
        width: 2rem;
        display: flex;
        justify-content: center;
        padding-top: 12px;
        text-align: center;
      }

      &:nth-child(5),
      &:nth-child(6),
      &:nth-child(7) {
        .text-input {
          border: none;
          font-weight: 600;
        }
      }
    }

    th, td {
      &:nth-child(6),
      &:nth-child(7) {
        color: $primary;

        .text-input {
          color: $primary;
        }
      }
    }
  }

  .skill {
    display: flex;
    padding-left: 1rem;
    height: 2rem;
    line-height: 2rem;

    &:nth-child(even) {
      background: $primary-tint;
    }

    .toggle-input {
      margin-top: 0.5rem;
    }

    .skill-name {
      font-weight: 600;
      text-transform: uppercase;
      margin-left: 0.5rem;
      white-space: nowrap;
      overflow: hidden;
    }

    .skill-ability {
      font-size: 12px;
      color: grey;
      margin-left: 5px;
    }

    .text-input-group {
      margin-left: auto;
      width: 3rem;

      .text-input {
        font-weight: 600;
        border-bottom: none;
      }
    }
  }
}

</style>
