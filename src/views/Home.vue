<template>
  <main id="home">
    <div class="content center">
      <template v-if="user">
        <character-list v-if="user" />
        <button type="button" class="btn-add-class" @click="addCharacter">
          Add
          <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
        </button>
      </template>
      <template v-else>
        <h1>Welcome to FBGen</h1>
        <p class="lead">
        D&amp;D 5e character sheet builder.
        </p>
        <p>
          Sign in to start building character sheets!
        </p>
      </template>
    </div>
  </main>
</template>

<script>
import CharacterList from '@/components/CharacterList'
import { db } from '@/firebase'
import defaultCharacter from '@/defaultCharacter'

export default {
  name: 'Home',
  computed: {
    user () {
      return this.$store.state.user
    },
  },
  methods: {
    addCharacter () {
      const char = Object.assign({}, defaultCharacter, { owner: this.user.uid, player: this.user.displayName })
      db.collection('characters')
        .add(char)
        .then(docRef => {
          this.$router.push(`/builder/${docRef.id}`)
        })
        .catch(err => {
          alert(err.message)
          console.error(err)
        })
    },
  },
  components: { CharacterList },
}
</script>

<style lang="scss" scoped>
.content h1 {
  margin-top: 3rem;
}

.btn-add-class {
  background: transparent;
  border: none;
  cursor: pointer;
  color: $primary;
  font-weight: 800;
  display: block;
  text-align: right;
  padding-right: 20px;

  &:hover {
    color: lighten($primary, 20%);
  }

  &:focus {
    outline: none
  }
}
</style>
