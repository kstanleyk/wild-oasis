import { UpdateMode } from "./update-mode.enum"

export interface BaseState {
    readonly isLoading: boolean
    readonly isSearching?: boolean
    readonly errors?: any
    readonly initialFetch: boolean
    readonly updateMode: UpdateMode
}
