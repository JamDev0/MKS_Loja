import { productInterface } from "../../slices/productsSlice";
import { api } from "../../../services/api";

interface apiParamsInterface {
    page: number;
    rows: number;
    sortBy: 'id' | 'name' | 'price',
    orderBy: 'DESC' | 'ASC'
}

export async function fetchProducts(parameters: apiParamsInterface) {
    return api.request({
        method: 'get',
        url: 'products',
        params: parameters
    })
}