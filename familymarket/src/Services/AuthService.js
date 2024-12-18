import api from "./Api";

export const loginUser = async (email, password) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response; 
    } catch (error) {
        throw error;
    }
};
