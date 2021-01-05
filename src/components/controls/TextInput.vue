<template>
  <label class="field text-input-group">
    <div class="text-input-label" v-if="label">{{label}}</div>
    <input
      type="text"
      class="text-input"
      :class="{ empty: !value }"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :readonly="readonly"
      spellcheck="false"/>
  </label>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['value', 'label', 'readonly'],
}
</script>

<style lang="scss">
.text-input-group {
  .text-input-label {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;

    & + .text-input {
      padding-top: 3px;
    }
  }

  &:focus-within {
    .text-input-label {
      color: $primary;
    }
  }

  .text-input {
    border: none;
    font-family: 'Open Sans', sans-serif;
    border-bottom: 3px solid black;
    background: transparent;
    font-size: 20px;
    width: 100%;
    caret-color: $primary;

    &:focus {
      outline: none;
      border-bottom-color: $primary;
    }
  }

  &.center {
    .text-input {
      text-align: center;
    }
  }
}
</style>
