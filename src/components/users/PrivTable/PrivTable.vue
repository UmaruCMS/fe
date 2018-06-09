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
    </div>
    <Table border :columns="tableCols" :data="privData"></Table>
    <div :class="$style.paging">
      <Page :total="3" show-sizer show-elevator></Page>
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
          render(h) {
            return h('Button', {
              props: {
                type: 'primary'
              },
              domProps: {
                innerHTML: '详细信息'
              }
            })
          },
          width: 110
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
