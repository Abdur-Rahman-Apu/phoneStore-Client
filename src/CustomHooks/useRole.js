import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const useRole = () => {

    const { user } = useContext(AuthContext)

    const [role, setRole] = useState(null)

    useEffect(() => {
        fetch(`https://phone-store-ten.vercel.app/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setRole(data?.role))
    }, [user?.email])


    return [role]
};

export default useRole;