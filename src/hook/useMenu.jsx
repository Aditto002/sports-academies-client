import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['populer'],
        queryFn: async() => {
            const res = await fetch('https://sports-academies-server-tau.vercel.app/populer');
            return res.json();
        }
    })

    return [menu, loading, refetch]
}

export default useMenu;