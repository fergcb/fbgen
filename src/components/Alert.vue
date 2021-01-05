<template>
  <dialog class="alert">
    <span class="message">{{ message }}</span>
    <button class="close" type="button" @click="close">
      <font-awesome-icon class="icon" :icon="['fas', 'times']" />
    </button>
  </dialog>
</template>

<script>
export default {
  name: 'Alert',
  props: ['message'],
  methods: {
    close () {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
.alert {
  height: 1.5rem;
  width: 100vw;
  max-height: 100%;
  border: none;
  background: $primary;
  line-height: 1.5rem;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  color: white;

  display: flex;

  &.open {
    display: flex;
  }

  .close {
    margin-left: auto;
    border: none;
    background: transparent;
    cursor: pointer;
    height: 1.5rem;
    color: rgba(white, 0.7);

    &:hover {
      color: white;
    }

    .icon {
      height: 100%;
    }
  }
}
</style>
