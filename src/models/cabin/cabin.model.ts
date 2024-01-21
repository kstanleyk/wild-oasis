import { ResponseBase } from "../../services/base/base.response"
import { BaseState } from "../base/base.state"

export interface Cabin {
    id: string
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
    id: "",
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