import apiRequest from "./request"

export async function HeroDynamo(): Promise<DynamicType | null> {
    try {
        const response = await apiRequest(`/dynamic`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.code == 200) {
            return response.data[0]
        } else {
            return null
        }
    } catch {
        return null
    }
}