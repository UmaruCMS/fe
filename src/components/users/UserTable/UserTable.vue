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
      <Button :class="$style.btn" icon="funnel" type="primary">筛选条件</Button>
    </div>
    <Table border :columns="tableCols" :data="groupData"></Table>
    <div :class="$style.paging">
      <Page :total="2306" show-sizer show-elevator></Page>
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
          title: '用户 ID',
          key: 'userID',
          align: 'center',
          width: 80
        },
        {
          title: '用户名',
          key: 'username',
          align: 'center'
        },
        {
          title: '邮箱',
          key: 'email',
          align: 'center'
        },
        {
          title: '姓名',
          key: 'name',
          align: 'center'
        },
        {
          title: '状态',
          key: 'status',
          align: 'center',
          width: 300,
          render: (h, params) => {
            return h('div', {
              class: [
                this.$style.status,
                params.row.status === 'blocked' ? this.$style.blocked : this.$style.normal
              ]
            }, [
              params.row.status === 'blocked' ? '已封禁 ' : '正常 ',
              h('a', params.row.status === 'blocked' ? '解封' : '封禁')
            ]
            )
          }
        }
      ],
      groupData: [
        {
          userID: 1,
          username: 'umaru_chan',
          email: 'umaru_chan@outlook.com',
          name: '土间埋',
          status: 'normal'
        },
        {
          userID: 2,
          username: 'sakura',
          email: 'sakura@outlook.com',
          name: '木之本樱',
          status: 'normal'
        },
        {
          userID: 3,
          username: 'xiaolang',
          email: 'xiaolang@outlook.com',
          name: '李小狼',
          status: 'normal'
        },
        {
          userID: 4,
          username: 'kimari',
          email: 'kimari@outlook.com',
          name: '玉木真理',
          status: 'normal'
        },
        {
          userID: 5,
          username: 'tomoyo',
          name: '大道寺知世',
          email: 'tomoyo@outlook.com',
          status: 'normal'
        },
        {
          userID: 6,
          username: 'lcx960324',
          name: '李晨曦',
          email: 'lcx960324@outlook.com',
          status: 'normal'
        },
        {
          userID: 7,
          username: 'xuzehao',
          name: '许泽昊',
          email: 'xuzehao@outlook.com',
          status: 'normal'
        },
        {
          userID: 8,
          username: 'fangboyang',
          name: '方伯阳',
          email: 'fangboyang@outlook.com',
          status: 'normal'
        },
        {
          userID: 9,
          username: 'liufangwen',
          name: '刘方文',
          email: 'liufangwen@outlook.com',
          status: 'normal'
        },
        {
          userID: 10,
          username: 'linyuxuan',
          email: 'linyuxuan@outlook.com',
          name: '林雨瑄',
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
