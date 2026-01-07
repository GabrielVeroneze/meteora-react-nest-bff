import { useQuery } from '@apollo/client/react'
import { GET_PRODUCTS } from '@/graphql/queries/products'
import { Product } from '@graphql-types/generated-types'
import { GridContainer, ProductContainer } from './styles'
import CardProduct from '@/components/CardProduct'
import Heading from '@/components/Heading'

const Products = () => {
    const { data } = useQuery<{ products: Product[] }>(GET_PRODUCTS)

    return (
        <ProductContainer>
            <Heading>Produtos que estão bombando!</Heading>
            <GridContainer>
                {data?.products.map((product) => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </GridContainer>
        </ProductContainer>
    )
}

export default Products
