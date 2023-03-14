import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import catsReducer from './features/cats/catsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cats: catsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch