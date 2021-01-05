<template>
  <input type="checkbox" class="toggle-input"
    :checked="value"
    @input="$emit('input', $event.target.checked)" />
</template>

<script>
export default {
  name: 'ToggleInput',
  props: ['value'],
}
</script>

<style lang="scss">
  .toggle-input {
    appearance: none;
    border: 0.3mm solid black;
    border-radius: 50%;
    padding: 0; margin: 0;
    width: 4.5mm;
    height: 4.5mm;

    &:checked {
      background: #333;
    }

    &:focus {
      outline: none;
      border-color: $primary;
    }

    &.small {
      width: 4mm;
      height: 4mm;
      border-width: 0.25mm;
    }
  }
</style>
