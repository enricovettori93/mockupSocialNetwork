<template>
  <span class="input">
    <label class="input__label" :for="id">{{ text }}</label>
    <input class="input__type"
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
export default class Button extends Vue {
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

</style>
