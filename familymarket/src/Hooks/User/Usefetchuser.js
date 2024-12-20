import { useState, useEffect } from 'react';
import { FetchUserProfile } from '../../Services/UserProfile';

const useFetchUser = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const data = await FetchUserProfile(); 
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getUserProfile();
    }, []); 

    return { user, error, loading };
};

export default useFetchUser;
