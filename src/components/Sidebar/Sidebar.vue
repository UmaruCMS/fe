<template>
  <Menu width="auto" :class="$style.root">
    <UserSection />
    <ArticleSection />
    <FileSection />
  </Menu>
</template>

<script>
import UserSection from './UserSection'
import ArticleSection from './ArticleSection'
import FileSection from './FileSection'

export default {
  components: {
    UserSection,
    ArticleSection,
    FileSection
  }
}
</script>

<style module>
.root {
  min-height: 100%;
}
</style>
