import api from "./Api";

export const LoginUserService = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response; 
    } catch (error) {
        throw error;
    }
};


export const RegisterCustomerService = async (name,email, password,phoneNumber) => {
    try {
        const response = await api.post("/customers", { name,email, password,phoneNumber });
        return response; 
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};



export const RegisterSelllerService = async (name,email, password,phoneNumber, hexadecimalCode) => {
    try {
        const response = await api.post("/sellers", { name,email, password,phoneNumber, hexadecimalCode});
        return response; 
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};