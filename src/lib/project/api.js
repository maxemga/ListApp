import { getToken } from '../utils/user'

const BASE_URL = 'https://dummyjson.com/'

const GET = 'GET'

export async function requestApi({ method = GET, url = '', body = null }) {
  const path = BASE_URL + url

  const params = {
    method,
  }

  const token = getToken()

  params.headers = {
    'Api-Key': `Bearer ${token}`,
  }

  params.headers['Content-Type'] = 'application/json'

  if (method !== GET) {
    params.body = JSON.stringify(body)
  }

  const response = await fetch(path, params)

  if (!response.ok) {
    throw new Error()
  }

  const result = await response.json()

  return result
}
