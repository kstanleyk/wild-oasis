import { apiRequests } from ".."
import { Cabin, CabinResponse } from "../../models/cabin/cabin.model"

const route = "/cabins"

const cabinService = {
    list: (): Promise<Cabin[]> => apiRequests.get(route),
    details: (code: string): Promise<Cabin> => apiRequests.get(`${route}/${code}`),
    create: (cabin: Cabin): Promise<CabinResponse> => apiRequests.post(route, cabin),
    update: (cabin: Cabin): Promise<CabinResponse> => apiRequests.put(route, cabin),
}

export default cabinService
