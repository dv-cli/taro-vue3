<template>
  <div>
    <NumberDisplay />
    <number-submit />
    {{ option }}
  </div>

</template>
<script lang="ts" setup>
import NumberDisplay from '@/components/NumberDisplay.vue'
import NumberSubmit from '@/components/NumberSubmit.vue'
import { useSystem } from '@/stores'
const system = useSystem()
const option = system.options
</script>
