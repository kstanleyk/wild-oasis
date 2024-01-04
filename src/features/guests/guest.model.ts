export interface IGuest {
    fullName: string
    email: string
    nationality: string
    nationalID: string
    countryFlag: string
}

export const emptyGuest : IGuest = {
    fullName: "",
    email: "",
    nationality: "",
    nationalID: "",
    countryFlag: ""
}