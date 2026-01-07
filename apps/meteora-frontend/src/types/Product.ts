export interface Product {
    name: string
    description: string
    price: number
    seller: string
    colors: Array<{
        id: string
        displayName: string
    }>
    sizes: Array<{
        id: string
        displayName: string
    }>
    image: string
}
