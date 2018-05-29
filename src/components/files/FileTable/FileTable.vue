<template>
  <div :class="$style.root">
    <div :class="$style.opts">
      <Input>
          <Select v-model="searchOpt" slot="prepend" style="width: 80px">
              <Option value="any">任意匹配</Option>
              <Option value="name">名称</Option>
              <Option value="desc">描述</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
      </Input>
      <Button :class="$style.btn" icon="upload" type="primary">上传文件</Button>
    </div>
    <Table border :columns="tableCols" :data="groupData"></Table>
    <div :class="$style.paging">
      <Page :total="2" show-sizer show-elevator></Page>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      searchOpt: 'any',
      tableCols: [
        {
          title: '文件名',
          key: 'name',
          align: 'center'
        },
        {
          title: '文件大小',
          key: 'size',
          align: 'center',
          width: 160
        },
        {
          title: '上传者',
          key: 'uploader',
          align: 'center',
          width: 200
        },
        {
          title: '要求登录？',
          key: 'loginRequired',
          align: 'center',
          width: 100,
          render(h, params) {
            if (params.row.loginRequired) {
              return h('span', '是')
            } else {
              return h('span', '否')
            }
          }
        },
        {
          title: '文件状态',
          key: 'status',
          align: 'center',
          width: 140,
          render: (h, params) => {
            return h('div', {
              class: [
                this.$style.status,
                params.row.status === 'blocked' ? this.$style.blocked : this.$style.normal
              ]
            }, [
              params.row.status === 'blocked' ? '已禁用 ' : '可下载 ',
              h('a', params.row.status === 'blocked' ? '解禁' : '禁用')
            ]
            )
          }
        },
        {
          title: '下载链接',
          key: 'link',
          align: 'center',
          width: 100,
          render(h) {
            return h('a', '点击下载')
          }
        },
      ],
      groupData: [
        {
          name: 'umr_bg.jpeg',
          size: '1.2 MB',
          uploader: '土间埋',
          loginRequired: false,
          status: 'normal'
        },
        {
          name: 'tomoyo_bg.png',
          size: '1.1 MB',
          uploader: '大道寺知世',
          loginRequired: false,
          status: 'blocked'
        }
      ]
    }
  }
}
</script>

<style module>

.opts {
  display: flex;
  margin-bottom: 10px;
}

.btn {
  margin-left: 10px;
}

.paging {
  margin-top: 10px;
  text-align: right;
}

.status {
  font-weight: 500;
}

.status a {
  text-decoration: underline;
}

.status.normal {
  color: #19be6b;
}

.status.blocked {
  color: #ed3f14;
}
</style>
