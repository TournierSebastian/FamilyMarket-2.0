import api from "./Api";

export const FetchUserProfile = async () => {
    const token = localStorage.getItem('token');
    if(token === null) return;
    try {
        const response = await api.get("/users/profile");
        return response.data;
    } catch (error) {
        return ; 
    }
};
