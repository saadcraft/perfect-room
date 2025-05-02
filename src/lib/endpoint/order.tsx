import { toast } from "react-toastify";
import apiRequest from "./request";

type apiOrders = {
    result: OrderInfo[];
    totalAct: number;
    count: number;
}


export async function addOrder(Data: { [key: string]: unknown }) {
    const loadingToast = toast.loading("ajouter en cours ...", { position: "bottom-right", hideProgressBar: true })
    try {
        const response = await apiRequest(`/orders`, {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.code == 201) {
            toast.update(loadingToast, {
                render: "Commande passée",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            })
            return true
        } else {
            toast.update(loadingToast, {
                render: response.message,
                type: "error",
                isLoading: false,
                autoClose: 3000,
                // ...(res.code === 401 && { onClick: () => redirect("/signin") }),
            })
            return false
        }
    } catch {
        toast.update(loadingToast, {
            render: "Probleme de connexion",
            type: "error",
            isLoading: false,
            autoClose: 3000,
            // ...(res.code === 401 && { onClick: () => redirect("/signin") }),
        })
        return false
    }
}

export async function ClientOrders({ num, page }: { num: string, page: string }): Promise<apiOrders | null> {
    try {
        const response = await apiRequest(`/orders/${num}?page=${page}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.code == 200) {
            return {
                result: response.data.result,
                totalAct: response.data.totalPages,
                count: response.data.total
            }
        } else {
            return null
        }
    } catch {
        return null
    }
}