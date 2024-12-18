import api from "./Api";

export const FetchUserProfile = async () => {
    try {
        const response = await api.get("/users/profile");
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener el perfil del usuario");
    }
};
