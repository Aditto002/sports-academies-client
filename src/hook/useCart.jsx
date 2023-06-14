import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/Authprovider';
import useAxiosSecure from './useAxiosSecoure';

const useCart = () =>{
    const {user,loading} = useContext(AuthContext);
    // const [axiosSecure] = useAxiosSecure();
  const token = localStorage.getItem('access-token');
    const { refetch, data : cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const response = await fetch(`https://sports-academies-server-tau.vercel.app/carts?email=${user?.email}`,{
                headers:{
                    authorization: `bearer ${token}`
                }
            })
            return response.json();
        }
      })
    return [cart,refetch]


}
export default useCart;