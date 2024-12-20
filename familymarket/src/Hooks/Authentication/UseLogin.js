import { useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'; 
import { LoginUserService } from '../../Services/AuthService';


const useLogin = () => {
    const { login } = useContext(AuthContext); 
    const [error, setError] = useState(null); 

    const UseloginUser = async (email, password) => {
        try {
            const response = await LoginUserService(email, password);
            if (response.status === 200) {
                login(response.data);
                window.location.href = "/";
                return;
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

    return { UseloginUser, error, setError}; // Devuelve el estado de error y carga
};

export default useLogin;
