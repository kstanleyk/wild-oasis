import { ResponseBase } from "../../utils/base.response"
import { BaseState } from "../../utils/base.state"

export interface Cabin {
    Id: string
    name: string
    maxCapacity: number
    regularPrice: number
    discount: number
    image: string
    description:string
}

export interface CabinState extends BaseState {
    readonly cabins: Cabin[]
    readonly cabin: Cabin
}

export const emptyCabin : Cabin = {
    Id: "",
    name: "",
    maxCapacity: 0,
    regularPrice: 0,
    discount: 0,
    image: "",
    description: "",
}

export interface CabinResponse extends ResponseBase {
    data: Cabin
}