<template>
  <div class="tally-input">
    <button v-for="index in max" :key="index" type="button" @click="toggle(index)">
      <font-awesome-icon :icon="icon" class="icon" :class="{ on: checked >= index }" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'TallyInput',
  props: ['value', 'max', 'icon'],
  data () {
    return {
      count: this.value,
    }
  },
  computed: {
    checked: {
      get () {
        return this.count
      },
      set (value) {
        this.count = value
        this.$emit('input', undefined, this.count)
      },
    },
  },
  methods: {
    toggle (index) {
      if (index === this.checked) this.checked--
      else this.checked = index
    },
  },
}
</script>

<style lang="scss" scoped>
.tally-input {
  display: inline-block;

  button {
    background: transparent;
    border: none;
    padding: 5px;
    font-size: 26px;
    border-radius: 50%;
    color: rgba($primary, 0.3);

    .icon.on {
      color: $primary;
    }

    &:focus {
      outline: none;
      background: $primary-tint;
    }
  }
}
</style>
