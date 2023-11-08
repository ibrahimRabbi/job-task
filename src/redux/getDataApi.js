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
        }),

        siginup: build.mutation({
            query: (data) => ({
                url: '/user',
                method: 'POST',
                body : data
            })
        }),

        location: build.mutation({
            query: (data) => ({
                url: '/location',
                method: 'POST',
                body: data
            })
        }),

        // details: build.mutation({
        //     query: ({ id, obj }) => ({
        //         url: `/location/${id}`,
        //         method: 'PATCH',
        //         body : obj
        //     })
        // })

    })
})

export const {useLocationDataQuery,useDistrictDataQuery,useDeshboardQuery,useSiginupMutation,useLocationMutation,useDetailsMutation} = allData



 
 