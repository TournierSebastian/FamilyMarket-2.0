import { useState, useEffect } from 'react';
import { FetchUserProfile } from '../../Services/FetchUserProfile';

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = async () => {
            try {
                const data = await FetchUserProfile(); 
                setUser(data);
            } catch (err) {
                console.error("Error al obtener los datos del usuario:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []); 

    return { user, error, loading };
};

export default useFetchUser;
