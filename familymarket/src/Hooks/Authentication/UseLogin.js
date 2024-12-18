import { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'; 
import { loginUser } from '../../Services/AuthService';

const useLogin = () => {
    const { login } = useContext(AuthContext); // Contexto de autenticación
    const [error, setError] = useState(null); // Estado para manejar errores

    const ValidateLogin = async (email, password) => {
        setError(null); 
        try {
            const response = await loginUser(email, password);
            if (response.status === 200) {
                login(response.data);
                return true;
            }
        } catch (error) {

            if (error.response && error.response.status === 401) {
                setError("Usuario o contraseña incorrectos");
                return false;
            } else{
                setError("Error al iniciar sesión");
                console.error("Error al iniciar sesión:", error);
                return false;
            }
            

        } 
    };

    return { ValidateLogin, error }; // Devuelve el estado de error y carga
};

export default useLogin;
