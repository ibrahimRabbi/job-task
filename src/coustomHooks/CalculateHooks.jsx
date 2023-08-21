import React from 'react';
import { useQuery } from '@tanstack/react-query';


const useCalculateHooks = (email) => {
    const {data={},refetch } = useQuery({
        queryKey: [email],
        queryFn: async () => {
            const fethching = await fetch(`http://localhost:5000/location/${email}`)
            const cont = await fethching.json()
            return cont

        }
})

    return  {data,refetch}
};

export default useCalculateHooks;