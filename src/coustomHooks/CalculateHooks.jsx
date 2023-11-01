import { useQuery } from '@tanstack/react-query';


const useCalculateHooks = () => {
    const id = localStorage.getItem('id')
    let subTotal = 0;

    const { data = {}, refetch } = useQuery({
        queryKey: [id],
        queryFn: async () => {
            const fethching = await fetch(`http://localhost:3000/location/${id}`)
            const cont = await fethching.json()
            return cont
        }
    })


    if (data?.distance > 30) {
        const vag = data.distance - 30
        const remainingKmPrice = vag * 0.5
        subTotal = remainingKmPrice + 50
    }

    if (data?.distance <= 30) {
        subTotal = 50
    }

    if (data?.weight > 1) {
        subTotal = subTotal + 20
    }

    if (data?.date) {
        subTotal = subTotal + data.date.price
    }

    if (data.floor) {
        subTotal = subTotal + data.floor.price
    }


    return { data, subTotal, refetch }
};

export default useCalculateHooks;