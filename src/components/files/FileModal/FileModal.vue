<template>
  <Modal width="640" :value="value" title="文件信息" @input="handleToggleModal">
    <div :class="$style.preview">
      <div :class="$style.title">图片预览（点击放大）</div>
      <img src="../../../assets/images/umr_bg.jpg" />
    </div>
    <div :class="$style.body">
      <div :class="$style.infos">
        <div :class="$style.info">
          <div :class="$style.key">文件名</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">umr_bg.jpg</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">文件大小</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">1.2MB</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">下载链接</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            <a>点击下载</a>
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">是否为自动上传</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">否</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">上传者</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">土间埋 (<a>@umr_chan</a>)</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">仅限登录用户下载</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            否
            <a><Icon type="edit" /> 修改</a>
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">文件描述</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            干物妹小埋的壁纸。
            <a><Icon type="edit" /> 修改</a>
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">文件状态</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            正常
            <a :class="$style.disableBtn">禁用</a>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer">
      <Button type="error">删除文件</Button>
      <Button type="primary">关闭</Button>
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
