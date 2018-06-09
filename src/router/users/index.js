import Index from '@/views/users/Index'
import User from '@/views/users/User'
import Group from '@/views/users/Group'
import Privilege from '@/views/users/Privilege'

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
  },
  {
    path: 'privileges',
    component: Privilege
  }
]