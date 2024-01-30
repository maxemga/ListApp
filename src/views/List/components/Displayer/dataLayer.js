import { requestApi } from '@/lib/project/api'

export async function getData(path, limit, skip, search = '') {
  const url = `${path}?limit=${limit}&skip=${skip}&q=${search}`

  const responceData = await requestApi({
    url,
  })

  return responceData
}
