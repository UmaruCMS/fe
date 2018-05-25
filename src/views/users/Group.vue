<template>
  <div :class="$style.root">
    <GroupTable />
  </div>
</template>

<script>
import GroupTable from '@/components/users/GroupTable'

export default {
  components: {
    GroupTable
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
