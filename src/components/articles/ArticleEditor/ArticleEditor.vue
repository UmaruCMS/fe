<template>
  <div>
    <QuillEditor v-model="content" @blur="onBlur"></QuillEditor>
  </div>
</template>

<script>
import {quillEditor as QuillEditor} from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    QuillEditor
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    onBlur () {
      console.log(this.content)
    }
  }
}
</script>
<style>

</style>
