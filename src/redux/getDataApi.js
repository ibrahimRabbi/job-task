import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const allData = createApi({
    reducerPath: 'allData',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://task-server-seven.vercel.app'}),
    endpoints: (build) => ({
        locationData: build.query({
            query: (id) => `/location/${id}`
        }),
        districtData: build.query({
            query: () => '/distric'
        }),
        deshboard: build.query({
            query: (email) => `/summery?email=${email}`
        })
    })
})

export const {useLocationDataQuery,useDistrictDataQuery,useDeshboardQuery} = allData



 
 