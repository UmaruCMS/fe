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
      <Button :class="$style.btn" icon="plus" type="primary">创建用户组</Button>
    </div>
    <Table border :columns="tableCols" :data="groupData"></Table>
    <div :class="$style.paging">
      <Page :total="1" show-sizer show-elevator></Page>
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
          title: '用户组名',
          key: 'name',
          align: 'center',
        },
        {
          title: '展示名称',
          key: 'dispName',
          align: 'center',
        },
        {
          title: '用户数',
          key: 'userCount',
          align: 'center',
          width: 200
        },
        {
          title: '操作',
          align: 'center',
          width: 90,
          render(h, params) {
            return h('Button', {
              props: {
                type: 'error'
              },
              domProps: {
                innerHTML: '删除',
                disabled: params.row.preserved
              }
            })
          }
        }
      ],
      groupData: [
        {
          name: 'all',
          dispName: '全部用户',
          userCount: '2,306',
          preserved: true
        },
        {
          name: 'admins',
          dispName: '管理员组',
          userCount: 16,
          preserved: true
        },
        {
          name: 'sudoers',
          dispName: '超级管理员组',
          userCount: 1,
          preserved: true
        },
        {
          name: 'editors',
          dispName: '文章编辑',
          userCount: 7
        },
        {
          name: 'art_sys_admins',
          dispName: '文章系统管理员',
          userCount: 3
        },
        {
          name: 'article_validators',
          dispName: '文章审核员',
          userCount: 5
        },
        {
          name: 'file_sys_admins',
          dispName: '文件系统管理员',
          userCount: 3
        },
        {
          name: 'file_validator',
          dispName: '文件审查员',
          userCount: 1
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
</style>
