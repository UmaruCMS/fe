<template>
  <Modal :value="value" title="用户信息" @input="handleToggleModal">
    
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

<style>

</style>
