export interface ResponseBase {
    success: boolean
    message: string
    validationErrors: string[]
}

export const emptyResponseBase: ResponseBase = {
    success: false,
    message: '',
    validationErrors: [],
}
