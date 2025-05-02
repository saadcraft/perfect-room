import apiRequest from "./request"

type apiProduct = {
    result: Products[];
    totalAct: number;
}

export async function AllProducts({ page, title, category }: { page: string, title: string, category: string }): Promise<apiProduct | null> {
    try {
        const response = await apiRequest(`/products?page=${page}&title=${title}&category=${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.code == 200) {
            return {
                result: response.data.result,
                totalAct: response.data.totalPages
            }
        } else {
            return null
        }
    } catch {
        return null
    }
}

export async function SingleProducts(id: string): Promise<Products | null> {
    try {
        const response = await apiRequest(`/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.code == 200) {
            return response.data
        } else {
            return null
        }
    } catch {
        return null
    }
}