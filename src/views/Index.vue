<template>
  <div :class="$style.root">
    <div :class="$style.sidebar">
      <Sidebar></Sidebar>
    </div>
    <div :class="$style.body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>

<style module>
.root {
  display: flex;
  width: 100vw;
  height: 100vh;
}

.sidebar {
  flex-shrink: 0;
  width: 210px;
  min-height: 100%;
}

.body {
  flex: 1;
  height: 100%;
  overflow: auto;
}
</style>
