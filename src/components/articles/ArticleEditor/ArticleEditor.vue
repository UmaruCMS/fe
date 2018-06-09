<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <Input value="Vue 编程思想"></Input>
      <Button type="primary" :class="$style.button">设定文章信息</Button>
    </div>
    <QuillEditor v-model="content" @blur="onBlur" :class="$style.editor"></QuillEditor>
    <div :class="$style.footer">
      <Button type="success">保存文章</Button>
      <Button type="error">放弃</Button>
    </div>
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
<style module>
.title {
  display: flex;
  box-sizing: border-box;
  padding: 10px;
}
.button {
  margin-left: 10px;
}
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--background);
}

.editor {
  flex: 1;
}

.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px;
}

.footer button + button {
  margin-left: 5px;
}
</style>
