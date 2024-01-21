import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import * as cabinModel from '../../../models/cabin/cabin.model'
import { UpdateMode } from "../../../models/update-mode/update-mode.enum"
import cabinService from "../../../services/cabin/cabin.service"

export const initialState: cabinModel.CabinState = {
    cabins: [],
    errors: '',
    cabin: cabinModel.emptyCabin,
    isLoading: false,
    initialFetch: true,
    updateMode: UpdateMode.NONE,
}

export const fetchCabinsAsync = createAsyncThunk<cabinModel.Cabin[], void>(
    'cabin/fetchCabinsAsync',
    async (_, thunkApi) => {
        try {
            return await cabinService.list()
        } catch (error) {
            return thunkApi.rejectWithValue({ error: "an error occured" })
        }
    }
)

export const cabinSlice = createSlice({
    name: 'cabin',
    initialState,
    reducers: {
        fetchCabinsRequest: (state) => {
            state.isLoading = true
        },
        fetchCabinsSuccess: (
            state,
            action: PayloadAction<cabinModel.Cabin[]>
        ) => {
            state.isLoading = false
            state.initialFetch = false
            state.cabins = action.payload
        },
        fetchCabinsError: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.errors = action.payload
        },
        editCabinSuccess: (state, action: PayloadAction<cabinModel.Cabin>) => {
            state.cabins = state.cabins.map((cabin) => {
                return cabin.id === action.payload.id ? action.payload : cabin
            })
            state.updateMode = UpdateMode.NONE
        },
        addCabinSuccess: (state, action: PayloadAction<cabinModel.Cabin>) => {
            state.cabins = [...state.cabins, action.payload]
            state.updateMode = UpdateMode.NONE
        },
        setActiveCabin: (state, action: PayloadAction<cabinModel.Cabin>) => {
            state.cabin = action.payload
        },
        setCabinUpdateMode: (state, action: PayloadAction<UpdateMode>) => {
            state.updateMode = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCabinsAsync.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCabinsAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.initialFetch = false
            state.cabins = action.payload
        })
        builder.addCase(fetchCabinsAsync.rejected, (state, action) => {
            state.isLoading = false
            state.errors = action.payload
        })
    },
})

export const {
    fetchCabinsRequest,
    fetchCabinsSuccess,
    fetchCabinsError,
    editCabinSuccess,
    addCabinSuccess,
    setActiveCabin,
    setCabinUpdateMode,
} = cabinSlice.actions

const reducer = cabinSlice.reducer

export { reducer as cabinReducer }