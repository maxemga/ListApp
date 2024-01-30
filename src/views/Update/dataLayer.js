import { requestApi } from '@/lib/project/api'

export async function getUser(id) {
  const responceData = await requestApi({
    url: `users/${id}`,
  })

  return responceData
}

export async function updateUser(id, body) {
  const responceData = await requestApi({
    url: `users/${id}`,
    method: 'PUT',
    body,
  })

  return responceData
}

export async function getPost(id) {
  const responceData = await requestApi({
    url: `posts/${id}`,
  })

  return responceData
}

export async function updatePost(id, body) {
  const responceData = await requestApi({
    url: `posts/${id}`,
    method: 'PUT',
    body,
  })

  return responceData
}
