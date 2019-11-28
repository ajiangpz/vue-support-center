<template>
  <div class="row">
    <input
      type="text"
      class="input"
      :class="inputClass"
      @input="$emit('update', $event.currentTarget.value)"
      :name="name"
      :value.prop="text"
      :placeholder="placeholder"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    text: {
      required: true
    },
    placeholder: {
      type: String
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: "text",
    event: "update"
  },
  computed: {
    inputClass() {
      return {
        invalid: this.invalid
      };
    }
  }
};
</script>
