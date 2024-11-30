import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://67403665d0b59228b7ef13a2.mockapi.io/' }),
  endpoints: (builder) => ({
    getTodoByName: builder.query({
      query: (name) => `todo`,
    }),
  }),
})

export const { useGetTodoByNameQuery } = todoApi;