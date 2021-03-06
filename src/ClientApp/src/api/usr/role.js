import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/usr/roles',
    method: 'get',
    params
  })
}

export function save(data) {
  let methodName = 'post'
  if (data.id > 0) { methodName = 'put' }
  return request({
    url: '/usr/roles',
    method: methodName,
    data
  })
}

export function remove(roleId) {
  return request({
    url: `/usr/roles/${roleId}`,
    method: 'delete'
  })
}

export function roleTreeListByUserId(userId) {
  return request({
    url: `/usr/roles/${userId}/rolestree`,
    method: 'get'
  })
}

export function changePermissons(roleId, permissons) {
  return request({
    url: `/usr/roles/${roleId}/permissons`,
    method: 'put',
    data: permissons
  })
}
