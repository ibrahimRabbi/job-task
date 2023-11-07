import { useLocationDataQuery } from "../redux/getDataApi";



const useCalculateHooks = () => {
    const id = localStorage.getItem('id')
    let subTotal = 0;
    const { data = {}, refetch } = useLocationDataQuery(id)



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