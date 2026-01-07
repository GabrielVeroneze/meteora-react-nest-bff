import { Link } from 'react-router'
import { Container, Form, Nav, Ul } from './styles'
import Button from '@/components/Button'
import LinkButton from '@/components/LinkButton'
import TextInput from '@/components/TextInput'

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <Ul>
                    <li>
                        <img src="/logo.png" alt="" />
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="nossas-lojas">Nossas lojas</Link>
                    </li>
                    <li>
                        <Link to="novidades">Novidades</Link>
                    </li>
                    <li>
                        <Link to="promocoes">Promoções</Link>
                    </li>
                </Ul>
                <Ul>
                    <li>
                        <Form>
                            <TextInput placeholder="Digite o produto" />
                            <Button $outline>Buscar</Button>
                        </Form>
                    </li>
                    <li>
                        <Ul>
                            <li>
                                <LinkButton to="/auth/login">Login</LinkButton>
                            </li>
                            <li>
                                <LinkButton to="/auth/cadastro" $outline>
                                    Cadastro
                                </LinkButton>
                            </li>
                        </Ul>
                    </li>
                </Ul>
            </Container>
        </Nav>
    )
}

export default Navbar
