import { useQuery } from '@tanstack/react-query';


const useCalculateHooks = () => {
    const id = localStorage.getItem('id')
    
    const {data={},refetch } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const fethching = await fetch(`http://localhost:5000/location/${id}`)
            const cont = await fethching.json()
            return cont

        }
})

    return  {data,refetch}
};

export default useCalculateHooks;