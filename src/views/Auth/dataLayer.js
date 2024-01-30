import { requestApi } from '@/lib/project/api'

export async function getUsers(body) {
  const responceData = await requestApi({
    url: 'auth/login',
    method: 'POST',
    body,
  })

  return responceData
}
