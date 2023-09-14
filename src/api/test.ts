import request from '@/utils/request'
import { mockUrl } from './url'

interface IPerson {
  name: string
  age: number
  avatar: string
}
export const getTest = async () => {
  return await request<IPerson[]>({ url: `${mockUrl}/mock` })
}
