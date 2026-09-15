import { useEffect, useState } from "react"

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

export const useFetch = <T, >(url: string, method: HttpMethod = "GET") => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, { method })
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`)
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                    console.error("Fetch failed:", error.message)
                } else throw error
            }
        }
        fetchData()
    }, [url, method])

    return { data, error }
}