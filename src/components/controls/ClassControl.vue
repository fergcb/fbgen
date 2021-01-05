<template>
  <div class="field class-control" @input="$emit('input', classes)">
    <text-input :label="classes && classes.length > 1 ? 'Classes' : 'Class'" :value="rendered" readonly/>
    <button class="edit-class" type="button" @click="open = true" v-if="!open">
      <font-awesome-icon class="icon" :icon="['fas', 'pencil-alt']" />
    </button>
    <div class="class-editor" :class="{ open }" ref="editor">
      <h2>Classes</h2>
      <button class="close-editor" type="button" @click="open = false">
        <font-awesome-icon class="icon" :icon="['fas', 'times']" />
      </button>
      <div v-for="(clazz, index) in classes" :key="index" class="pure-g class-row">
        <text-input class="pure-u-17-24" v-model="clazz.class" :label="index ? undefined : 'Class'" />
        <text-input class="pure-u-5-24 center" v-model="clazz.level" :label="index ? undefined : 'Level'" />
        <button type="button" class="pure-u-2-24 delete-class" v-if="classes.length > 0 && index > 0" @click="deleteClass(index)">
          <font-awesome-icon class="icon" :icon="['fas', 'trash-alt']" />
        </button>
      </div>
      <div class="footer">
        <button type="button" class="add-class" @click="addClass()">
          Add
          <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/components/controls/TextInput'

export default {
  name: 'ClassControl',
  props: ['value'],
  components: { TextInput },
  data () {
    return {
      open: false,
    }
  },
  computed: {
    classes () {
      return this.value
    },
    rendered () {
      return this.classes && this.classes.map(clazz => `${clazz.class} ${clazz.level}`).join(', ')
    },
  },
  methods: {
    deleteClass (index) {
      this.classes.splice(index, 1)
      this.$emit('input', this.classes)
    },
    addClass () {
      this.classes.push({ class: '', level: 1 })
      this.$emit('input', this.classes)
    },
  },
}
</script>

<style lang="scss" scoped>
.class-control {
  position: relative;

  &:hover, &:focus {
    .edit-class {
      display: inline-block;
    }
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: $primary;
    &:focus {
      outline: none
    }
  }

  .edit-class {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: none;
    background: white;
    padding: 2px;
  }

  .class-editor {
    display: none;
    position: absolute;
    border: 3px solid black;
    margin-top: 10px;
    padding: 5px;
    background: white;
    z-index: 100;

    &.open {
      display: block;
    }

    .close-editor {
      position: absolute;
      right: 5px;
      top: 5px;
    }

    .class-row {
      &:hover {
        input {
          background: $primary-tint;
        }
      }

      .delete-class {
        text-align: right;
        padding-top: 4px;
      }
    }

    .footer {
      text-align: right;
      padding-top: 2px;
      padding-right: 2px;

      .add-class {
        color: black;
        padding-top: 4px;
        font-weight: 800;

        &:hover {
          color: $primary;
        }
      }
    }
  }
}
</style>
