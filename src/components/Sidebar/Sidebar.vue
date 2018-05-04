<template>
  <Menu theme="dark" width="auto" :class="$style.root">
    <UserSection />
    <ArticleSection />
  </Menu>
</template>

<script>
import UserSection from './UserSection'
import ArticleSection from './ArticleSection'

export default {
  components: {
    UserSection,
    ArticleSection
  }
}
</script>

<style module>
.root {
  min-height: 100%;
}
</style>
