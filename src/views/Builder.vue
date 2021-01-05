<template>
  <main id="builder">
    <alert :message="error" v-if="showError" @close="showError = !showError"/>
    <div class="info">
      <router-link class="back-link" to="/">&lt; Back to characters</router-link>
      <div v-if="this.state === 'fetching'">Fetching data...</div>
      <div v-if="this.state === 'syncing'">Saving changes...</div>
      <div v-if="this.state === 'synced'">All changes saved.</div>
      <div v-if="this.state === 'error'">An error occured saving your changes.</div>
      <div v-if="this.state === 'modified'">You have unsaved changes.</div>
    </div>
    <sheet-editor :character="character" @input="update()"/>
  </main>
</template>

<script>
import Alert from '@/components/Alert'
import SheetEditor from '@/components/SheetEditor'
import { db } from '../firebase'
import defaultCharacter from '../defaultCharacter'
import debounce from 'debounce'
import merge from 'lodash.merge'

export default {
  name: 'Builder',
  components: { Alert, SheetEditor },
  data () {
    return {
      docPath: undefined,
      character: defaultCharacter,
      state: 'fetching',
      showError: false,
      error: '',
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
  },
  methods: {
    async forceUpdate () {
      this.state = 'syncing'
      try {
        await db.doc(this.docPath).set(this.character)
        this.state = 'synced'
      } catch (err) {
        this.state = 'error'
        console.error(err)
      }
    },
    async update () {
      this.state = 'modified'
      this.debouncedUpdate()
    },
    debouncedUpdate: debounce(function () {
      this.forceUpdate()
    }, 1500),
  },
  async created () {
    const id = this.$route.params.id
    const docPath = `characters/${id}`
    this.docPath = docPath
    const docRef = db.doc(docPath)
    const data = (await docRef.get()).data()
    this.character = merge({}, defaultCharacter, data ?? {})
    this.state = 'synced'
  },
}
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  justify-content: space-between;
  text-align: right;
  font-size: 16px;
  color: grey;
  margin: 0 10px;
  margin-top: 5px;

  .back-link {
    color: $primary;
    text-decoration: none;

    &:hover {
      color: lighten($primary, 20%);
    }
  }
}
</style>
