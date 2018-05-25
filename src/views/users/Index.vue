<template>
  <div>
    <UserModal v-model="showUserModal"></UserModal>
    <UserPrivModal v-model="showUserPrivModal"></UserPrivModal>
  </div>
</template>

<script>
import UserModal from '@/components/users/UserModal'
import UserPrivModal from '@/components/users/UserPrivModal'
export default {
  components: {
    UserModal,
    UserPrivModal
  },
  data() {
    return {
      showUserModal: false,
      showUserPrivModal: true
    }
  }
}
</script>

<style>

</style>
