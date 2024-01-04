export interface ICabin {
    name: string
    maxCapacity: number
    regularPrice: number
    discount: number
    image: string
    description:string
}

export const emptyCabin : ICabin = {
    name: "",
    maxCapacity: 0,
    regularPrice: 0,
    discount: 0,
    image: "",
    description: ""
}