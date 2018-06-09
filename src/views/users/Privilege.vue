<template>
  <div :class="$style.root">
    <PrivTable></PrivTable>
  </div>
</template>

<script>
import PrivTable from '@/components/users/PrivTable'
export default {
  components: {
    PrivTable
  }
}
</script>

<style module>
.root {
  padding: 20px;
  min-height: 100vh;
  background-color: #fff;
}
</style>
