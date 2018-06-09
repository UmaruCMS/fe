<template>
  <Modal width="480" :value="value" title="用户信息" @input="handleToggleModal">
    <div :class="$style.body">
      <div :class="$style.avatar">
        <img src="../../../assets/images/avatar.jpeg" />
      </div>
      <div :class="$style.infos">
        <div :class="$style.info">
          <div :class="$style.key">ID</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">1</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">姓名</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">土间埋</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">账号</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">umr_chan</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">邮箱</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">umr@outlook.com</div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">性别</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            <Icon type="female" color="#f36"></Icon> 女
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">用户状态</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            正常
            <a :class="$style.disableBtn">封禁</a>
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">所属用户组</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            <a>
              <Icon type="search"></Icon> 点击查看
            </a>
          </div>
        </div>
        <div :class="$style.info">
          <div :class="$style.key">权限信息</div>
          <div :class="$style.colon">：</div>
          <div :class="$style.value">
            <a>
              <Icon type="search"></Icon> 点击查看
            </a>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer">
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
.body {
  display: flex;
}

.avatar {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  box-shadow: 1px 1px 1px 1px var(--border);
}

.avatar img {
  width: 80px;
  height: 80px;
}

.infos {
  flex: 1;
  margin-left: 30px;
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
