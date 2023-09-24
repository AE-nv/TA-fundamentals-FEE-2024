<script setup lang="ts">
import InputNumber from 'primevue/inputnumber'
import { computed } from 'vue'

const props = defineProps<{
  label: string
  modelValue?: number
  min?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number | undefined]
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div class="flex flex-column mt-3">
    <label for="amount-input">{{ props.label }}</label>
    <InputNumber
      id="amount-input"
      class="mt-2"
      :model-value="value"
      :min="props.min"
      @input="event => value = event.value as unknown as number"
    />
  </div>
</template>

<style scoped lang="scss"></style>