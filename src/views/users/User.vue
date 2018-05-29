<template>
  <div :class="$style.root">
    <UserTable />
    <UserModal v-model="showUserModal"></UserModal>
    <UserPrivModal v-model="showUserPrivModal"></UserPrivModal>
  </div>
</template>

<script>
import UserTable from '@/components/users/UserTable'
import UserModal from '@/components/users/UserModal'
import UserPrivModal from '@/components/users/UserPrivModal'
export default {
  components: {
    UserTable,
    UserModal,
    UserPrivModal
  },
  data() {
    return {
      showUserModal: true,
      showUserPrivModal: false
    }
  }
}
</script>

<style module>
.root {
  padding: 20px;
  min-height: 100vh;
  background-color: #fff;
}
</style>
