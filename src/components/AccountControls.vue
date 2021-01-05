<template>
  <div class="account-controls">
    <template v-if="user">
      <div class="user-name">{{ user.displayName }}</div>
      <button class="btn signout" type="button" @click="signout">
        Sign out
        <font-awesome-icon class="icon" :icon="['fas', 'sign-out-alt']" />
      </button>
    </template>
    <template v-if="!user">
      <div class="signin">Sign in:</div>
      <ul class="signin-options">
        <li>
          <button v-if="!user" @click="googleSignin" class="btn provider">
            <font-awesome-icon class="icon" :icon="['fab', 'google']" />
            <label>Google</label>
          </button>
        </li>
        <li>
          <button v-if="!user" @click="facebookSignin" class="btn provider">
            <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
            <label>Facebook</label>
          </button>
        </li>
        <li>
          <button v-if="!user" @click="githubSignin" class="btn provider">
            <font-awesome-icon class="icon" :icon="['fab', 'github']" />
            <label>GitHub</label>
          </button>
        </li>
      </ul>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth, googleProvider, githubProvider, facebookProvider } from '../firebase'

export default Vue.extend({
  name: 'AccountControl',
  computed: {
    user () {
      return this.$store.state.user
    },
  },
  methods: {
    googleSignin () {
      this.signin(googleProvider)
    },
    facebookSignin () {
      this.signin(facebookProvider)
    },
    githubSignin () {
      this.signin(githubProvider)
    },
    signin (provider) {
      auth.signInWithPopup(provider)
        .catch(err => {
          alert(err.message)
        })
    },
    signout () {
      auth.signOut()
    },
  },
})
</script>

<style lang="scss" scoped>
.account-controls {
  display: flex;

  .signin {
    font-weight: bold;
    font-size: 14px;
    color: firebrick;
    height: 100%;
    padding: 1rem;
  }

  .signin-options {
    display: flex;
    list-style: none;

    .provider {
      height: 100%;
      background: transparent;
      border: none;
      text-align: center;
      padding: 0 0.5rem;
      cursor: pointer;

      &:hover {
        background: lightgrey;
      }

      &:focus {
        outline: none;
      }

      .icon {
        font-size: 1rem;
        display: block;
        margin: auto;
      }

      label {
        cursor: inherit;
        font-weight: bold;
      }
    }
  }

  .user-name {
    line-height: 3rem;
    margin-right: 0.5rem;
  }

  .signout {
    height: 100%;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0 0.5rem;

    &:focus {
      outline: none;
    }

    &:hover {
      color: firebrick;
    }

    .icon {
      margin-left: 3px;
    }
  }
}
</style>
