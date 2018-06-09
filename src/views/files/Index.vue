<template>
  <div :class="$style.root">
    <Tabs>
      <TabPane label="手动上传列表"></TabPane>
      <TabPane label="自动上传列表"></TabPane>
    </Tabs>
    <FileTable />
    <FileModal v-model="showFileModal"></FileModal>
    <FileUploadModal v-model="showFileUploadModal"></FileUploadModal>
  </div>
</template>

<script>
import FileModal from '@/components/files/FileModal'
import FileUploadModal from '@/components/files/FileUploadModal'
import FileTable from '@/components/files/FileTable'
export default {
  components: {
    FileModal,
    FileTable,
    FileUploadModal
  },
  data() {
    return {
      showFileModal: true,
      showFileUploadModal: false
    }
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
