
export interface IBooking {
    createdAt:string
    startDate:string
    endDate: string
    cabinId: number
    guestId: number
    hasBreakfast: boolean
    observations: string
    isPaid: boolean
    numGuests: number
}

export const emptyBooking: IBooking = {
    createdAt: "",
    startDate: "",
    endDate: "",
    cabinId: 0,
    guestId: 0,
    hasBreakfast: false,
    observations: "",
    isPaid: false,
    numGuests: 0
}