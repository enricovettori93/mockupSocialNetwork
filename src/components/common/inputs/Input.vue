<template>
  <span class="custominput">
    <label class="custominput__label" :for="id">{{ text }}</label>
    <input class="custominput__input"
           :value="value"
           @input="updateValue($event.target.value)"
           :type="type"
           :id="id"
           :required="required"/>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop() private type!: string;
  @Prop() private id!: string;
  @Prop() private text!: string;
  @Prop({ default: true }) private required?: boolean;
  @Prop() private value!: string;

  protected updateValue(value: string) {
    this.$emit('input', value);
  }
}
</script>

<style scoped lang="scss">
@import "../../../styles/variables";

$input-border-color: rgb(226, 226, 226);
$input-border-color-hover: rgb(74, 74, 74);

.custominput {
  display: flex;
  flex-direction: column;
  text-align: left;

  > * {
    width: 100%;
  }

  &__label {
    font-weight: 300;
  }

  input {
    border: none;
    border-bottom: 2px solid $input-border-color;
    transition: border .2s ease-in-out;
    font-size: 15px;

    &:focus {
      border-bottom: 2px solid $input-border-color-hover;
      outline: none;
    }
  }
}
</style>
