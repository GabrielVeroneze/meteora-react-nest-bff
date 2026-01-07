import { FeatureStyled } from './styles'

interface FeatureProps {
    icon: string
    title: string
    description: string
}

const Feature = ({ icon, title, description }: FeatureProps) => {
    return (
        <FeatureStyled>
            <img src={icon} alt={title + ' ' + description} />
            <ul>
                <li>
                    <strong>{title}</strong>
                </li>
                <li>{description}</li>
            </ul>
        </FeatureStyled>
    )
}

export default Feature
