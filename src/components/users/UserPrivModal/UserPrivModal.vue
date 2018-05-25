<template>
  <Modal width="700" :value="value" @input="handleToggleModal">
    <div slot="header">
      用户权限信息 - 土间埋 （@<a>umaru_chan</a>）
    </div>
    <div :class="$style.body">
      <div :class="$style.opts">
        <Button type="primary" icon="plus">添加权限</Button>
      </div>
      <Table border :columns="tableCols" :data="privData"></Table>
    </div>
    <div slot="footer">
      <Button type="success">应用</Button>
      <Button type="ghost">取消</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      tableCols: [
        {
          title: '权限名',
          key: 'name',
          width: 200
        },
        {
          title: '权限描述',
          key: 'description'
        },
        {
          title: '操作',
          render(h, params) {
            return h('Button', {
              props: {
                type: 'error',
                disabled: params.row.fromGroup
              },
              domProps: {
                innerHTML: '删除'
              }
            })
          },
          width: 90
        }
      ],
      privData: [
        {
          name: 'su',
          description: '超级管理员权限。'
        },
        {
          name: 'create_article',
          description: '新建文章。',
          fromGroup: true
        },
        {
          name: 'upload_file',
          description: '上传文件。',
          fromGroup: true
        }
      ]
    }
  },
  methods: {
    handleToggleModal (payload) {
      this.$emit('input', payload)
    }
  }
}
</script>

<style module>
.opts {
  text-align: right;
  margin-bottom: 10px;
}
</style>
