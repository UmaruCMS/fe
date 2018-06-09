<template>
  <Modal width="640" :value="value" title="上传文件" @input="handleToggleModal">
    <div :class="$style.body">
      <Form>
        <Upload
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击或将文件拖拽至此上传</p>
          </div>
        </Upload>
        <Form-item label="文件描述">
          <Input />
        </Form-item>
        <Checkbox>仅限登录用户访问</Checkbox>
      </Form>
    </div>
    <div slot="footer">
      <Button icon="upload" type="success">上传</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    handleToggleModal (payload) {
      this.$emit('input', payload)
    }
  }
}
</script>

<style module>
.preview {
  margin: 0 auto;
  width: 480px;
}

.title {
  text-align: left;
  font-size: 14px;
}

.preview img {
  max-width: 480px;
}

.infos {
  margin: 10px auto 0;
  width: 480px;
}

.info {
  font-size: 14px;
  display: table-row;
}

.info .key, .info .value {
  display: table-cell;
}

.info .key {
  text-align: right;
}

.disableBtn {
  color: var(--error);
}

.disableBtn:hover {
  color: var(--error);
  text-decoration: underline;
}

</style>
