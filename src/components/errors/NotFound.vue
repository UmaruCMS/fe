<template>
  <div :class="$style.root">
    <slot>: ( - 404 啦。</slot>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.root {
  text-align: center;
  font-size: 24px;
  color: var(--disabled);
}
</style>
