import { NewsletterBox, NewsletterForm, NewsletterHeading } from './styles'
import Button from '@/components/Button'
import TextInput from '@/components/TextInput'

const Newsletter = () => {
    return (
        <NewsletterBox>
            <NewsletterHeading>
                Quer receber nossas novidades, promoções exclusivas e 10% OFF na
                primeira compra? <strong>Cadastre-se!</strong>
            </NewsletterHeading>
            <NewsletterForm>
                <TextInput placeholder="Digite seu email" />
                <Button>Enviar</Button>
            </NewsletterForm>
        </NewsletterBox>
    )
}

export default Newsletter
