<template>
  <div :class="$style.root">: ( - 404 啦。</div>
</template>
<script>
export default {}
</script>
<style module>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-size: 24px;
  color: var(--disabled);
}
</style>