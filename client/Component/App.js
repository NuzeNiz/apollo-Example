import React from 'react'
import {ApolloClient, ApolloProvider,InMemoryCache} from '@apollo/client'

import Ping from './Ping'
import Query from './Query'

const client = new ApolloClient({
    uri:'http://localhost:4000',
    cache:new InMemoryCache()
})

function App() {
    return(
        <ApolloProvider client={client}>
            <div>
                <h1>plz</h1>
                <Ping/>
                <Query/>
            </div>
        </ApolloProvider>
    )
}

export default App