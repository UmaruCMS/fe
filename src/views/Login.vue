<template>
  <div :class="$style.root">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/Login'
export default {
  components: {
    LoginForm
  }
}
</script>

<style module>
.root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>
