<template>
  <FileModal v-model="showFileModal"></FileModal>
</template>

<script>
import FileModal from '@/components/files/FileModal'
export default {
  components: {
    FileModal
  },
  data() {
    return {
      showFileModal: true
    }
  }
}
</script>

<style>

</style>
