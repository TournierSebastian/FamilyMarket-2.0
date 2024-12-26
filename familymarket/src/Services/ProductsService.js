import api from "./Api";


export  const fetchProductsService  = async(params)=>{

        try{
            const response = await api.get('/products', {
                params: {
                    isActive: params.isActive,
                    inStock: params.inStock,
                    filterOn: params.filterOn,
                    filterQuery: params.filterQuery,
                    sortBy: params.sortBy,
                    isAscending: params.isAscending,
                    pageNumber: params.pageNumber,
                    pageSize: params.pageSize
                }
            });
            return response.data;
        }catch(error){
            return;
        }

}