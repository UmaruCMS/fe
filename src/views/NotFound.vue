<template>
  <div :class="$style.root">
    <NotFound></NotFound>
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
  width: 100vw;
  height: 100vh;
}
</style>