import Index from '@/views/users/Index'
import User from '@/views/users/User'
import Group from '@/views/users/Group'

export default [
  {
    path: '',
    component: Index
  },
  {
    path: 'users',
    component: User
  },
  {
    path: 'groups',
    component: Group
  }
]