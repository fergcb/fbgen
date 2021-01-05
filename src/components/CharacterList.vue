<template>
  <section class="character-list">
    <h1>My Characters</h1>
    <table class="characters" v-if="characters.length">
      <thead>
        <tr>
          <th>Character Name</th>
          <th>Race</th>
          <th>Class</th>
          <th>Player</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="character in characters" :key="character.id">
          <td>{{character.name}}</td>
          <td>{{character.race}}</td>
          <td>{{
            character.classes
              .map(clazz => `${clazz.class} ${clazz.level}`)
              .join(', ')
          }}</td>
          <td>{{character.player}}</td>
          <td><router-link class="link" :to="`/builder/${character.id}`">Edit</router-link></td>
          <td><a href="#" class="link" @click.prevent="deleteCharacter(character)">Delete</a></td>
        </tr>
      </tbody>
    </table>
    <p class="lead" v-else>
      No character sheets to show.
    </p>
  </section>
</template>

<script>
import { db } from '../firebase'

export default {
  name: 'CharacterList',
  data () {
    return {
      characters: [],
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
  },
  methods: {
    deleteCharacter (character) {
      if (!confirm(`Are you sure you want to delete ${character.name}?`)) return
      db.collection('characters')
        .doc(character.id)
        .delete()
        .catch(err => {
          alert(err.message)
          console.log(err)
        })
    },
  },
  watch: {
    user: {
      immediate: true,
      handler (user) {
        this.$bind('characters', db.collection('characters').where('owner', '==', user.uid))
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.character-list {
  padding: 1rem;

  .characters {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 2px;
    }

    tbody {
      tr {
        border: none;

        &:nth-child(odd) {
          background: $primary-tint
        }

        td {
          text-align: left;
          padding: 2px;

          .link {
            color: $primary;
            font-weight: 900;
            text-decoration: none;

            &:hover {
              color: lighten($primary, 20%);
            }
          }
        }
      }
    }
  }
}
</style>
