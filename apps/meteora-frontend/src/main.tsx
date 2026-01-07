import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { GlobalStyles } from '@/styles/GlobalStyles'
import AppRoutes from '@/router'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
    cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <GlobalStyles />
            <AppRoutes />
        </ApolloProvider>
    </StrictMode>,
)
