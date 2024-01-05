import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Cabin, CabinState, emptyCabin } from "../../../features/cabins/cabin.model";
import cabinService from "../../../services/cabin.service";
import { UpdateMode } from "../../../utils/update-mode.enum";

export const initialState: CabinState = {
    cabins: [],
    errors: '',
    cabin: emptyCabin,
    isLoading: false,
    initialFetch: true,
    updateMode: UpdateMode.NONE,
}

export const fetchCabinsAsync = createAsyncThunk<Cabin[], void>(
    'cabin/fetchCabinsAsync',
    async (_, thunkApi) => {
        try {
            return await cabinService.list()
        } catch (error: any) {
            return thunkApi.rejectWithValue({ error: error.data })
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
            action: PayloadAction<Cabin[]>
        ) => {
            state.isLoading = false
            state.initialFetch = false
            state.cabins = action.payload
        },
        fetchCabinsError: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.errors = action.payload
        },
        editCabinSuccess: (state, action: PayloadAction<Cabin>) => {
            state.cabins = state.cabins.map((cabin) => {
                return cabin.Id === action.payload.Id ? action.payload : cabin
            })
            state.updateMode = UpdateMode.NONE
        },
        addCabinSuccess: (state, action: PayloadAction<Cabin>) => {
            state.cabins = [...state.cabins, action.payload]
            state.updateMode = UpdateMode.NONE
        },
        setActiveCabin: (state, action: PayloadAction<Cabin>) => {
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