<template>
  <Form ref="loginForm" :class="$style.root" :model="loginForm" :rules="loginFormRules">
    <div :class="$style.banner">Umaru CMS</div>
    <FormItem prop="username">
      <Input v-model="loginForm.username" type="text">
        <Icon slot="prepend" type="ios-person-outline"/>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input v-model="loginForm.password" type="password">
        <Icon slot="prepend" type="ios-locked-outline"/>
      </Input>
    </FormItem>
    <Button type="primary" @click="handleLogin" long>登录</Button>
  </Form>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: {
          required: true,
          message: '请输入正确的用户名',
          min: 6,
          trigger: 'blur'
        },
        password: {
          required: true,
          message: '请输入正确的密码',
          min: 6,
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (!valid) return

        this.$router.push('/')
        
      })
    }
  }
}
</script>

<style module>
.root {
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  width: 400px;
  background-color: #fff;
}

.banner {
  margin-bottom: 10px;
  color: var(--title);
  font-size: 18px;
}
</style>
