import { Container, Img } from './styles'

interface BannerProps {
    src: string
    alt: string
}

const Banner = ({ src, alt = '' }: BannerProps) => {
    return (
        <Container>
            <Img src={src} alt={alt} />
        </Container>
    )
}

export default Banner
