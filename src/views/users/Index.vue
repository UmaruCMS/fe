<template>
  <UserModal v-model="showUserModal"></UserModal>
</template>

<script>
import UserModal from '@/components/users/UserModal'
export default {
  components: {
    UserModal
  },
  data() {
    return {
      showUserModal: true
    }
  }
}
</script>

<style>

</style>
