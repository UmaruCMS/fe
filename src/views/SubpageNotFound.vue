<template>
  <div :class="$style.root">
    <NotFound>: ( - 该模块不存在</NotFound>
  </div>
</template>

<script>
import {NotFound} from '@/components/errors'
export default {
  components: {
    NotFound
  }
}
</script>

<style module>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
