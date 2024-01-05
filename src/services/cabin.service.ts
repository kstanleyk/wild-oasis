import { apiRequests } from '.'
import { Cabin, CabinResponse } from '../features/cabins/cabin.model'

const cabinService = {
    list: (): Promise<Cabin[]> => apiRequests.get('/cabins'),
    details: (code: string): Promise<Cabin> => apiRequests.get(`/cabins/${code}`),
    create: (branch: Cabin): Promise<CabinResponse> => apiRequests.post('/cabins', branch),
    update: (branch: Cabin): Promise<CabinResponse> => apiRequests.put('/cabins', branch),
}

export default cabinService
