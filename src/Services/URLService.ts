

export class DataService <T>{
    private baseURL: string

    constructor(baseURL: string){
        this.baseURL = baseURL
    }

    async getShortenedURL(endpoint: string): Promise<T>{
        const response = await fetch(`${this.baseURL}/${endpoint}`)
        const data  = await response.json()
        return data as T
    }

}