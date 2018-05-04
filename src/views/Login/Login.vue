<template>
  <div :class="$style.root">
    <Form>
      <Form-Item>
        <Input value="123"></Input>
      </Form-Item>
      <Form-Item>
        <Input value="123"></Input>
      </Form-Item>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    
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
