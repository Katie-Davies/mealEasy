import { useQuery } from '@tanstack/react-query'

import { getUserById } from '../apis/backend-apis/users'

export default function useGetUserById(id: string) {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => await getUserById(id),
  })
}
