import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CatEntity } from './catEntity'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export interface CatsState {
  cats: CatEntity[]
}

const initialState: CatsState = {
  cats: [],
}


export const fetchAllCats = createAsyncThunk(
    'users/fetchAllCats',
    async (thunkAPI) => {
        try {
            const result = await axios.get
            ('https://cats-68586-default-rtdb.europe-west1.firebasedatabase.app/cats.json')
            
            const data = result.data;
        
            let cats = [];
            for(const key in data) {            
                cats.push({id: key, name: data[key].name, color: data[key].color});
            }

            return cats;
        }
        catch(error) {
            console.log(error);
            
        }
    }
  )
  export const createCat = createAsyncThunk(
    'users/createCat',
    async (cat: CatEntity, thunkAPI) => {
        try {
            const result = await axios.post('https://cats-68586-default-rtdb.europe-west1.firebasedatabase.app/cats.json', cat)
         
            cat.id = result.data.name;

            return cat;
        }
        catch(error) {
            console.log(error);
            
        }
    }
  )


export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllCats.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("action.payload", action.payload);
      
      state.cats = action.payload ?? []
    })
    builder.addCase(createCat.fulfilled, (state, action) => {
        // Add user to the state array
        console.log("action.payload", action.payload);
        
        state.cats.push(action.payload!)

        // return {...state, cats: [...state.cats, action.payload]};

      })
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = catsSlice.actions

export default catsSlice.reducer