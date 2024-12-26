import { useState } from 'react';
import { fetchProductsService } from "../../Services/ProductsService";

const UseFetchProducts = () => {
    const [Productos, SetProductos] = useState(null);

    const GetProducts = async (params) => {
        try {
            const response = await fetchProductsService(params);
            SetProductos(response);
            console.log("Productos:", response);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };

    return { GetProducts, Productos };
};

export default UseFetchProducts;