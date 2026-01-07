import { FigCaption, Figure, Img } from './styles'

interface CategoryItemProps {
    name: string
    image: string
}

const CategoryItem = ({ name, image }: CategoryItemProps) => {
    return (
        <Figure>
            <Img src={image} alt={name} />
            <FigCaption>{name}</FigCaption>
        </Figure>
    )
}

export default CategoryItem
