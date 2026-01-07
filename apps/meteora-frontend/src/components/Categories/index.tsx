import { useQuery } from '@apollo/client/react'
import { GET_CATEGORIES } from '@/graphql/queries/categories'
import { CategoryList, Container } from './styles'
import Category from '@/components/Category'
import type { Category } from '@graphql-types/generated-types'
import Heading from '@/components/Heading'

const Categories = () => {
    const { data } = useQuery<{ categories: Category[] }>(GET_CATEGORIES)

    return (
        <Container>
            <Heading>Busque por categoria:</Heading>
            <CategoryList>
                {data?.categories.map((c) => (
                    <li key={c.id}>
                        <Category name={c.displayName} image={c.icon} />
                    </li>
                ))}
            </CategoryList>
        </Container>
    )
}

export default Categories
